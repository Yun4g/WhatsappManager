import { ConnectToWhatsappPhoneNumber } from "@/api/dashboard";
import { useUserStore } from "@/store/userData";
import { ArrowBigLeft } from "lucide-react";
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
                    <span>
                        <ArrowBigLeft className="h-4 w-4" />
                    </span>

                    Back
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
                        </div>
                    </>
                )}
            </section>
        </>
    );
}
