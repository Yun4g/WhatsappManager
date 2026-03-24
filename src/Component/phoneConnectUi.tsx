
import { useDashboardStore } from "@/store/dashboardStore";
import {  RefreshCw } from "lucide-react";

interface propType {
    setConnectMethodPhone: () => void
}

export default function PhonePairingUI({ setConnectMethodPhone }: propType) {
    const code = useDashboardStore((state) => state.code)

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-sm p-6 md:p-8">

                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-900">
                            Connect Account
                        </h1>
                        <p className="text-sm text-gray-500">
                            Use phone number to connect to Manajer
                        </p>
                    </div>

                    <button
                        onClick={setConnectMethodPhone}
                        className="p-2 rounded-full hover:bg-gray-100">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="38" height="38" rx="19" fill="white" />
                            <path d="M14.1299 25.3096H22.1299C24.8899 25.3096 27.1299 23.0696 27.1299 20.3096C27.1299 17.5496 24.8899 15.3096 22.1299 15.3096H11.1299" stroke="#181925" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.4301 17.8104L10.8701 15.2504L13.4301 12.6904" stroke="#181925" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>


                <div className="bg-gray-50 rounded-2xl p-5 md:p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">
                        Connect via Phone
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Use the code below to link your WhatsApp
                    </p>


                    <div className="bg-gray-100 rounded-2xl p-4 md:p-6 flex flex-col items-center">
                        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
                            {code?.split('').map((char: string, index: number) => (
                                <div
                                    key={index}
                                    className="w-12 h-14 md:w-14 md:h-16 flex items-center justify-center bg-white rounded-xl border border-gray-200 text-lg md:text-xl font-semibold text-gray-800"
                                >
                                    {char}
                                </div>
                            ))}
                        </div>

                        <p className="text-xs md:text-sm text-gray-500 text-center max-w-md leading-relaxed">
                            Open WhatsApp on your phone. Go to linked devices. Tap link
                            with “Phone Number”. Enter the code above to connect
                        </p>


                        <div className="flex items-center gap-3 mt-6">
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    alt="whatsapp"
                                    className="w-5 h-5"
                                />
                            </div>

                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
                                <span className="text-lg font-bold text-gray-800">S</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                            Inactive
                        </div>

                        <button className="flex items-center gap-2 bg-[#0F172A] text-white text-sm px-4 py-2 rounded-full hover:bg-[#1E293B] transition">
                            Resend Code
                            <RefreshCw size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

