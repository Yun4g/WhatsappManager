import { useState } from "react";

const InfoIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block ml-1 align-middle">
        <circle cx="7" cy="7" r="6.5" stroke="#9CA3AF" strokeWidth="1" />
        <text x="7" y="11" textAnchor="middle" fontSize="9" fill="#9CA3AF" fontWeight="600">i</text>
    </svg>
);

const ChevronIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 6l4 4 4-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CloseIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M4 4l8 8M12 4l-8 8" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="10" stroke="#16A34A" strokeWidth="1.5" />
        <path d="M6.5 11l3 3 6-6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const TRIGGERS = ["When a new user joins", "When a message is sent", "When a user leaves", "On scheduled time"];
const CATEGORIES = ["Send welcome DM", "Send announcement", "Notify admin", "Archive channel"];

interface SelectProps {
    value: string;
    options: string[];
    onChange: (v: string) => void;
    placeholder?: string;
}

function Select({ value, options, onChange, placeholder }: SelectProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-2 py-2 text-left focus:outline-none group"
            >
                <span className={`text-base sm:text-lg ${value ? "text-gray-800" : "text-gray-400"} font-normal`}>
                    {value || placeholder}
                </span>
                <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
                    <ChevronIcon />
                </span>
            </button>
            {open && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    {options.map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            onClick={() => { onChange(opt); setOpen(false); }}
                            className={`w-full px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors
                ${value === opt ? "text-gray-900 font-medium bg-gray-50" : "text-gray-600"}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}



interface SuccessToastProps {
    trigger: string;
    onClose: () => void;
}

function SuccessToast({ trigger, onClose }: SuccessToastProps) {
    return (
        <div className="animate-in slide-in-from-bottom-4 fade-in duration-300
      bg-white rounded-2xl shadow-2xl border border-gray-100
      p-5 sm:p-6 flex items-start gap-4 w-full max-w-sm sm:max-w-md">

            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-green-500" />

            <div className="flex-1 pl-2">
                <div className="flex items-center gap-2 mb-1">
                    <CheckCircleIcon />
                    <h3 className="text-green-600 font-bold text-lg sm:text-xl leading-tight">
                        Automation added
                    </h3>
                </div>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    You have successfully added an automation for{" "}
                    <span className="text-gray-700 font-medium">{trigger.toLowerCase()}</span>{" "}
                    your group
                </p>
            </div>

            <button
                onClick={onClose}
                className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200
          flex items-center justify-center transition-colors mt-0.5"
                aria-label="Close"
            >
                <CloseIcon size={14} />
            </button>
        </div>
    );
}



interface NewAutomationModalProps {
    onClose?: () => void;
}

export default function NewAutomationModal({ onClose }: NewAutomationModalProps) {
    const [name, setName] = useState("");
    const [trigger, setTrigger] = useState(TRIGGERS[0]);
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

    function validate() {
        const e: typeof errors = {};
        if (!name.trim()) e.name = "Please enter an automation name";
        if (!message.trim()) e.message = "Please enter a message";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;
        setSuccess(true);
    }

    function handleReset() {
        setSuccess(false);
        setName("");
        setMessage("");
        setErrors({});
    }


    if (success) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div className="relative">
                    <SuccessToast
                        trigger={trigger === TRIGGERS[0] ? "when a new user joins" : trigger.toLowerCase()}
                        onClose={handleReset}
                    />
                </div>
            </div>
        );
    }


    return (
        <section className="fixed inset-0  z-50 flex items-center justify-center bg-black/40 px-4">
            
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                <div
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-[520px]
          overflow-hidden relative"
                    style={{ boxShadow: "0 8px 48px 0 rgba(0,0,0,0.10)" }}
                >

                    <div className="mx-6 mt-6 border-t-2 border-dashed border-gray-200 rounded-full" />

                    <form onSubmit={handleSubmit} noValidate>

                        <div className="flex items-start justify-between px-6 sm:px-8 pt-6 pb-2">
                            <div>
                                <h2 className="text-gray-900 font-bold text-xl sm:text-2xl leading-tight">
                                    New Automation
                                </h2>
                                <p className="text-gray-400 text-sm sm:text-base mt-0.5">
                                    Add group automation
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200
                flex items-center justify-center transition-colors flex-shrink-0 mt-0.5"
                                aria-label="Close"
                            >
                                <CloseIcon size={16} />
                            </button>
                        </div>


                        <div className="mx-6 sm:mx-8 my-4 border-t-2 border-dashed border-gray-200" />


                        <div className="px-6 sm:px-8 space-y-5 pb-6">


                            <div>
                                <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-2">
                                    Automation name <InfoIcon />
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                                    placeholder="Enter automation name..."
                                    className={`w-full bg-transparent text-base sm:text-lg text-gray-800
                  placeholder-gray-400 pb-2 border-b focus:outline-none transition-colors
                  ${errors.name
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-gray-200 focus:border-gray-500"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-2">
                                        Trigger <InfoIcon />
                                    </label>
                                    <div className="border-b border-gray-200">
                                        <Select value={trigger} options={TRIGGERS} onChange={setTrigger} />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-2">
                                        Category <InfoIcon />
                                    </label>
                                    <div className="border-b border-gray-200">
                                        <Select value={category} options={CATEGORIES} onChange={setCategory} />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-2">
                                    Message <InfoIcon />
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => { setMessage(e.target.value); setErrors((p) => ({ ...p, message: undefined })); }}
                                    placeholder="Enter message name..."
                                    rows={3}
                                    className={`w-full bg-transparent text-base sm:text-lg text-gray-800
                  placeholder-gray-400 pb-2 border-b resize-none focus:outline-none transition-colors
                  ${errors.message
                                            ? "border-red-400 focus:border-red-500"
                                            : "border-gray-200 focus:border-gray-500"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>
                        </div>


                        <div className="mx-6 sm:mx-8 border-t-2 border-dashed border-gray-200" />


                        <div className="px-6 sm:px-8 py-5 sm:py-6">
                            <button
                                type="submit"
                                className="w-full bg-gray-900 hover:bg-gray-800 active:scale-[0.98]
                text-white font-semibold text-base sm:text-lg
                py-3.5 sm:py-4 rounded-2xl transition-all duration-150
                focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                Add automation
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}