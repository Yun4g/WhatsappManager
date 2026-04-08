import { useState, useRef, useEffect } from "react";

type Tab = "group" | "direct";

const EMOJIS = ["😊", "😂", "❤️", "👍", "🎉", "🔥", "😍", "🙏", "😎", "✨", "💯", "🤝"];

const TIMES = Array.from({ length: 48 }, (_, i) => {
    const h = Math.floor(i / 2);
    const m = i % 2 === 0 ? "00" : "30";
    const period = h < 12 ? "AM" : "PM";
    const display = `${h === 0 ? 12 : h > 12 ? h - 12 : h}:${m} ${period}`;
    return display;
});

function InfoDot() {
    return (
        <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full  text-[9px] font-bold ml-1 cursor-help select-none">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7.07121 9.08024L7.16702 8.68857C7.11743 8.71186 7.03747 8.73848 6.92783 8.76877C6.81789 8.79907 6.71894 8.8145 6.63198 8.8145C6.44675 8.8145 6.31634 8.78414 6.24063 8.72311C6.16546 8.66208 6.12798 8.54728 6.12798 8.37914C6.12798 8.31252 6.13928 8.21321 6.16294 8.08323C6.18587 7.95238 6.21223 7.83611 6.24155 7.7344L6.59922 6.46808C6.63425 6.35187 6.65828 6.2241 6.67119 6.08466C6.6844 5.94552 6.69055 5.84817 6.69055 5.79292C6.69055 5.52589 6.59695 5.3092 6.40969 5.14204C6.22243 4.975 5.95577 4.89148 5.6102 4.89148C5.41791 4.89148 5.21461 4.92565 4.99945 4.99393C4.78429 5.06202 4.55936 5.14406 4.32404 5.23987L4.22798 5.63184C4.29811 5.60591 4.38163 5.57801 4.47934 5.54912C4.57663 5.52036 4.67207 5.50549 4.76493 5.50549C4.95452 5.50549 5.08223 5.53782 5.14916 5.60148C5.21608 5.66534 5.2497 5.77891 5.2497 5.94128C5.2497 6.03107 5.23907 6.13081 5.217 6.23922C5.19525 6.34831 5.16809 6.46366 5.13613 6.5854L4.77691 7.85682C4.74496 7.99043 4.7216 8.10996 4.70691 8.21609C4.69235 8.32211 4.68534 8.42615 4.68534 8.52731C4.68534 8.78862 4.78189 9.00403 4.97493 9.17402C5.16796 9.34333 5.43862 9.42857 5.78658 9.42857C6.01317 9.42857 6.21205 9.39895 6.3832 9.3394C6.55418 9.28003 6.78378 9.19368 7.07121 9.08024ZM7.00748 3.9362C7.17458 3.78126 7.25773 3.59284 7.25773 3.37221C7.25773 3.15207 7.1747 2.96328 7.00748 2.80638C6.84081 2.64991 6.63991 2.57143 6.40502 2.57143C6.1694 2.57143 5.9677 2.64972 5.79943 2.80638C5.63116 2.96328 5.54684 3.15201 5.54684 3.37221C5.54684 3.59284 5.63116 3.7812 5.79943 3.9362C5.968 4.09168 6.16934 4.16948 6.40502 4.16948C6.63997 4.16948 6.84081 4.09168 7.00748 3.9362Z" fill="#F5F5F5" />
            </svg>

        </span>
    );
}

interface EmojiPickerProps {
    onSelect: (emoji: string) => void;
    onClose: () => void;
}

function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) onClose();
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [onClose]);

    return (
        <div
            ref={ref}
            className="absolute bottom-8 left-0 z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 grid grid-cols-6 gap-1.5 w-52"
        >
            {EMOJIS.map((e) => (
                <button
                    key={e}
                    onClick={() => { onSelect(e); onClose(); }}
                    className="text-xl hover:bg-gray-100 rounded-lg p-1 transition-colors"
                >
                    {e}
                </button>
            ))}
        </div>
    );
}

interface TimeDropdownProps {
    value: string;
    onChange: (val: string) => void;
}

function TimeDropdown({ value, onChange }: TimeDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative flex-1">
            <button
                onClick={() => setOpen((p) => !p)}
                className="w-full flex items-center justify-between text-sm text-gray-400 py-1 focus:outline-none"
            >
                <span className={value ? "text-gray-800" : "text-gray-400"}>
                    {value || "--:-- --"}
                </span>
                <svg className="w-4 h-4 text-gray-400 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute top-8 left-0 z-50 bg-white rounded-xl shadow-xl border border-gray-100 max-h-44 overflow-y-auto w-36 py-1">
                    {TIMES.map((t) => (
                        <button
                            key={t}
                            onClick={() => { onChange(t); setOpen(false); }}
                            className={`w-full text-left px-3 py-1.5 text-sm hover:bg-gray-50 transition-colors ${value === t ? "font-semibold text-gray-900" : "text-gray-600"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

interface ScheduledMessageProps {
    onClose?: () => void;
}

export default function ScheduledMessage({ onClose }: ScheduledMessageProps) {
    const [tab, setTab] = useState<Tab>("group");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [attachedFile, setAttachedFile] = useState<{ name: string; thumb: string } | null>();
    const [showEmoji, setShowEmoji] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);
     const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () =>
            setAttachedFile({ name: file.name, thumb: reader.result as string });
        reader.readAsDataURL(file);
    };

    const handleSchedule = async () => {
        if (!message.trim() || !date || !time) return;
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1400));
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2500);
    };

    const canSubmit = message.trim() && date && time && (tab === "group" || phone.trim());

    return (


        <div
            className="auto-modal w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ maxWidth: 500 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >


            <div className="px-6 pt-6 pb-4 flex items-start justify-between">
                <div>
                    <h2 className="text-[1.35rem] font-bold text-gray-900 tracking-tight leading-tight">
                        Scheduled Message
                    </h2>
                    <p className="text-sm text-gray-400 mt-0.5">Schedule a message</p>
                </div>
                <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors flex-shrink-0 mt-0.5"
                >
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>


            <div className="border-t border-dashed border-gray-200 mx-6 mt-3" />


            <div className="px-6 py-5 space-y-3">


                <div className="flex  items-center gap-2">
                    <button
                        onClick={() => setTab("group")}
                        className={`px-2 md:px-5  py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${tab === "group"
                                ? "bg-gray-900 text-white shadow-sm"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        Group Message
                    </button>
                    <button
                        onClick={() => setTab("direct")}
                        className={` px-2 md:px-5 py-2 rounded-full  text-xs md:text-sm font-semibold transition-all duration-200 ${tab === "direct"
                                ? "bg-gray-900 text-white shadow-sm"
                                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        Direct Message
                    </button>
                </div>


                {tab === "direct" && (
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-gray-800 flex items-center">
                            Enter number <InfoDot />
                        </label>
                        <div className="border-b border-gray-200 pb-2">
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="0812 507 6981"
                                className="w-full text-sm text-gray-500 placeholder-gray-400 focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                )}


                <div >
                    <label className="text-sm font-semibold text-gray-800 mt-2 flex items-center">
                        Message <InfoDot />
                    </label>
                    <section>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type message"
                            rows={3}
                            className="w-full text-sm text-gray-500 placeholder-gray-400 focus:outline-none resize-none bg-transparent leading-relaxed"
                        />


                        <div className="  flex items-center gap-4 relative">
                            <input ref={fileRef} type="file" className="hidden" onChange={handleFile} />
                            <button
                                onClick={() => fileRef.current?.click()}
                                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Add a file
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setShowEmoji((p) => !p)}
                                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <span className="text-base">😊</span>
                                    Add emojis
                                </button>
                                {showEmoji && (
                                    <EmojiPicker
                                        onSelect={(e) => setMessage((m) => m + e)}
                                        onClose={() => setShowEmoji(false)}
                                    />
                                )}
                            </div>
                        </div>
                    </section>

                </div>



               
                {attachedFile && (
                    <div className="relative inline-block">
                        <img
                            src={attachedFile.thumb}
                            alt={attachedFile.name}
                            className="w-14 h-14 rounded-xl object-cover border border-gray-200"
                        />
                        <button
                            onClick={() => setAttachedFile(null)}
                            className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 bg-gray-800 rounded-full flex items-center justify-center"
                        >
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}


                <div className="border-t border-gray-100 pt-4 flex items-end gap-4">

                    <div className="flex-1 space-y-1">
                        <label className="text-sm font-medium mb-2 text-[#181925] flex items-center">
                            Select date <InfoDot />
                        </label>
                        <div className="flex items-center gap-1 ">
                            <input
                             ref={inputRef}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="flex-1 text-sm bg-transparent focus:outline-none text-gray-800 appearance-none min-w-0"
                                style={{ colorScheme: "light" }}
                            />
                            <svg 
                             onClick={() => inputRef.current?.showPicker()}
                            className="w-4 h-4 cursor-pointer text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>


                    <div className="flex-1 space-y-1">
                        <label className="text-sm font-medium text-[#181925] flex items-center">
                            Select time <InfoDot />
                        </label>
                        <TimeDropdown value={time} onChange={setTime} />
                    </div>
                </div>
            </div>


            <div className="border-t border-dashed border-gray-200 mx-6" />


            <div className="px-6 py-5">
                <button
                    onClick={handleSchedule}
                    disabled={!canSubmit || loading}
                    className={`w-full py-3.5 rounded-full text-white font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${canSubmit && !loading
                            ? "bg-gray-900 hover:bg-gray-800 active:scale-[0.98] shadow-md"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Scheduling…
                        </>
                    ) : success ? (
                        <>
                            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Message Scheduled!
                        </>
                    ) : (
                        "Schedule Message"
                    )}
                </button>
            </div>
        </div>

    );
}