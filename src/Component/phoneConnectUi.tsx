import { ConnectToWhatsappPhoneNumber } from "@/api/dashboard";
import { useUserStore } from "@/store/userData";
import { useState } from "react";
import toast from "react-hot-toast";


interface PropsType {
    setConnectMethodPhone: () => void,
}




export default function PhonePairingUi({ setConnectMethodPhone }: PropsType) {
    const [phone, setPhone] = useState("");
    const user = useUserStore(state => state.user);
    const connectWithPhone = ConnectToWhatsappPhoneNumber;
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState<string | null>()


    const handleSendCode = async () => {
        if (!user?.id) {
            toast.error("User not available")
            console.log("User not available");
            return;
        }

        setLoading(true);

        try {
            const res = await connectWithPhone(user?.id, phone);
            if (res) {
                toast.success("requst sent successfully")
                setCode(res.pairingCode)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        } finally {
            setLoading(false)
        }


    };





    return (
        <>

            {loading && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-3 shadow">
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-[#1A3A2A] rounded-full animate-spin" />
                        <p className="text-sm font-medium text-gray-700">Processing...</p>
                    </div>
                </div>
            )}

            <section>
                <button
                    className="flex items-center gap-2 mt-6"
                    onClick={setConnectMethodPhone}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="19" fill="white" />
                        <path d="M14.1299 25.3101H22.1299C24.8899 25.3101 27.1299 23.0701 27.1299 20.3101C27.1299 17.5501 24.8899 15.3101 22.1299 15.3101H11.1299" stroke="#181925" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4301 17.8099L10.8701 15.2499L13.4301 12.6899" stroke="#181925" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </section>

            <section className="w-full bg-white rounded-3xl p-4 mt-[16px]">
                <h1 className="text-[#181925] text-[16px] font-bold">
                    Connect via Phone
                </h1>

                {!code ? (
                    <>
                        <p className="text-[#999999] mt-1 text-sm">
                            Enter your number to receive a pairing code
                        </p>

                        <div className="bg-[#F9F9F9] flex flex-col items-center w-full py-[33px] mt-[16px] rounded-[18px] px-4">
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter phone number"
                                className="w-full max-w-[260px] border rounded-xl px-4 py-2.5 text-sm bg-white"
                            />

                            <button
                                onClick={handleSendCode}
                                className="mt-4 bg-[#181925] text-white px-4 py-2 rounded-xl text-sm font-semibold"
                            >
                                Send Code
                            </button>
                        </div>
                    </>
                ) : (
                    <>

                        <p className="text-[#999999] mt-1 text-sm">
                            Use the code below to link your WhatsApp
                        </p>

                        <div className="bg-[#F9F9F9] flex flex-col items-center w-full py-[33px] mt-[16px] rounded-[18px] px-4 gap-4">

                            <div className="flex items-center gap-3 bg-white border rounded-xl px-4 py-3">
                                <span className="text-lg font-semibold tracking-widest">
                                    {code}
                                </span>

                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(code);
                                        toast.success("Code copied!");
                                    }}
                                    className="text-xs text-blue-600 font-medium"
                                >
                                    Copy
                                </button>
                            </div>

                            <div className="text-xs text-gray-600 text-center leading-relaxed max-w-[280px]">
                                <p>
                                    Open WhatsApp on your phone.
                                </p>
                                <p>
                                    Go to <span className="font-medium">Linked Devices</span>.
                                </p>
                                <p>
                                    Tap <span className="font-medium">Link with phone number</span>.
                                </p>
                                <p>
                                    Paste the code above to connect.
                                </p>
                            </div>

                            <button
                                onClick={handleSendCode}
                                className="mt-4 bg-[#181925] text-white px-4 py-2 rounded-xl text-sm font-semibold"
                            >
                                ReSend Code
                            </button>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}
