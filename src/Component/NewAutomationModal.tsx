import { useEffect, useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { GetTriggersAndCategory } from "@/api/Groups";


interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    value: string;
    onValueChange: (v: string) => void;
    options: SelectOption[];
    placeholder?: string;
}

function Select({ value, onValueChange, options, placeholder }: SelectProps) {
    return (
        <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
            <SelectPrimitive.Trigger
                className="
          flex items-center justify-between w-full
          text-[15px] font-normal text-gray-400
          focus:outline-none focus:ring-0
          data-[placeholder]:text-gray-400
          bg-transparent cursor-pointer
          py-1 group
        "
            >
                <SelectPrimitive.Value placeholder={placeholder}>
                    {value
                        ? options.find((o) => o.value === value)?.label
                        : placeholder}
                </SelectPrimitive.Value>
                <SelectPrimitive.Icon asChild>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-500 flex-shrink-0"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            <SelectPrimitive.Portal>
                <SelectPrimitive.Content
                    position="popper"
                    sideOffset={6}
                    className="
            z-[200] min-w-[var(--radix-select-trigger-width)]
            bg-white border border-gray-200 rounded-xl shadow-xl
            overflow-hidden
            data-[state=open]:animate-in data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
            data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
            data-[side=bottom]:slide-in-from-top-2
          "
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                    <SelectPrimitive.Viewport className="p-1">
                        {options.map((opt) => (
                            <SelectPrimitive.Item
                                key={opt.value}
                                value={opt.value}
                                className="
                  relative flex items-center px-3 py-2 rounded-lg
                  text-[13.5px] font-medium text-gray-700
                  cursor-pointer select-none outline-none
                  data-[highlighted]:bg-gray-100 data-[highlighted]:text-gray-900
                  data-[state=checked]:font-semibold data-[state=checked]:text-gray-900
                  transition-colors
                "
                            >
                                <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
                                <SelectPrimitive.ItemIndicator className="absolute right-3">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </SelectPrimitive.ItemIndicator>
                            </SelectPrimitive.Item>
                        ))}
                    </SelectPrimitive.Viewport>
                </SelectPrimitive.Content>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    );
}



function InfoIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM7.07121 9.08024L7.16702 8.68857C7.11743 8.71186 7.03747 8.73848 6.92783 8.76877C6.81789 8.79907 6.71894 8.8145 6.63198 8.8145C6.44675 8.8145 6.31634 8.78414 6.24063 8.72311C6.16546 8.66208 6.12798 8.54728 6.12798 8.37914C6.12798 8.31252 6.13928 8.21321 6.16294 8.08323C6.18587 7.95238 6.21223 7.83611 6.24155 7.7344L6.59922 6.46808C6.63425 6.35187 6.65828 6.2241 6.67119 6.08466C6.6844 5.94552 6.69055 5.84817 6.69055 5.79292C6.69055 5.52589 6.59695 5.3092 6.40969 5.14204C6.22243 4.975 5.95577 4.89148 5.6102 4.89148C5.41791 4.89148 5.21461 4.92565 4.99945 4.99393C4.78429 5.06202 4.55936 5.14406 4.32404 5.23987L4.22798 5.63184C4.29811 5.60591 4.38163 5.57801 4.47934 5.54912C4.57663 5.52036 4.67207 5.50549 4.76493 5.50549C4.95452 5.50549 5.08223 5.53782 5.14916 5.60148C5.21608 5.66534 5.2497 5.77891 5.2497 5.94128C5.2497 6.03107 5.23907 6.13081 5.217 6.23922C5.19525 6.34831 5.16809 6.46366 5.13613 6.5854L4.77691 7.85682C4.74496 7.99043 4.7216 8.10996 4.70691 8.21609C4.69235 8.32211 4.68534 8.42615 4.68534 8.52731C4.68534 8.78862 4.78189 9.00403 4.97493 9.17402C5.16796 9.34333 5.43862 9.42857 5.78658 9.42857C6.01317 9.42857 6.21205 9.39895 6.3832 9.3394C6.55418 9.28003 6.78378 9.19368 7.07121 9.08024ZM7.00748 3.9362C7.17458 3.78126 7.25773 3.59284 7.25773 3.37221C7.25773 3.15207 7.1747 2.96328 7.00748 2.80638C6.84081 2.64991 6.63991 2.57143 6.40502 2.57143C6.1694 2.57143 5.9677 2.64972 5.79943 2.80638C5.63116 2.96328 5.54684 3.15201 5.54684 3.37221C5.54684 3.59284 5.63116 3.7812 5.79943 3.9362C5.968 4.09168 6.16934 4.16948 6.40502 4.16948C6.63997 4.16948 6.84081 4.09168 7.00748 3.9362Z" fill="#EBEBEB" />
        </svg>

    );
}



function Divider({ dashed = false }: { dashed?: boolean }) {
    return (
        <hr
            className="border-0 border-t border-gray-200 w-full"
            style={dashed ? { borderStyle: "dashed" } : {}}
        />
    );
}








interface NewAutomationModalProps {
    setTrigger: (data: string) => void
    onClose?: () => void;
    onSubmit?: (data: AutomationFormData) => void;
}

interface AutomationFormData {
    name: string;
    trigger: string;
    category: string;
    message: string;
}

 interface Trigger {
    id: string;
    key: string;
    label: string;
 }
export function NewGroupsAutomationModal({
    setTrigger,
    onClose,
    onSubmit,
}: NewAutomationModalProps) {
    const [form, setForm] = useState<AutomationFormData>({
        name: "",
        trigger: "",
        category: "",
        message: "",
    });
    const [automationTriggers, setAutomationTriggers] = useState<Trigger[]>([]);
    const [automationCategories, setAutomationCategories] = useState<Trigger[]>([]);

    const setField =
        (field: keyof AutomationFormData) =>
            (value: string) =>
                setForm((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = () => {
        if (onSubmit) onSubmit(form);
    };

    
    useEffect(()=> {
        setTrigger(form.trigger)
    },[form.trigger])



    useEffect(() => {
        let isMounted = true
        const fetchTriggers = async () => {

            try {
                const res = await GetTriggersAndCategory();
                console.log("triggers and category", res);
                if (isMounted) {
                    // setGroupData(res.group[0] || null);
                    setAutomationTriggers(res.data.trigger || []);
                    setAutomationCategories(res.data.category || []);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchTriggers();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div
            className="auto-modal w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ maxWidth: 500 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >

            <div className="flex items-start justify-between px-3 md:px-[24px] pt-4 md:pt-8 pb-3 md:pb-6">
                <div>
                    <h2
                        id="modal-title"
                        className="text-[18px] text-[#181925] font-bold text-gray-950 leading-tight tracking-tight"
                    >
                        New Automation
                    </h2>
                    <p className="text-[14px] text-[#999999] mt-0.5 font-normal">
                        Add group automation
                    </p>
                </div>
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="
            w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200
            flex items-center justify-center
            text-gray-500 hover:text-gray-700
            transition-colors duration-150 flex-shrink-0 mt-0.5
          "
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="19" fill="#F5F5F5" />
                        <path d="M24.6572 13.6572L13.3435 24.9709" stroke="#999999" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M13.3428 13.6572L24.6565 24.9709" stroke="#999999" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                </button>
            </div>


            <div className="px-3 md:px-[24px]">
                <Divider dashed />
            </div>


            <div className="px-3 md:px-[24px] pt-4 md:pt-8 pb-3 md:pb-6  space-y-3 md:space-y-6">


                <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                        <label
                            htmlFor="automation-name"
                            className="text-[14px] font-semibold text-gray-800"
                        >
                            Automation name
                        </label>
                        <InfoIcon />
                    </div>
                    <div>
                        <input
                            id="automation-name"
                            type="text"
                            value={form.name}
                            onChange={(e) => setField("name")(e.target.value)}
                            placeholder="Enter automation name..."
                            className="
                w-full bg-transparent border-0 border-b border-gray-200
                text-[15px] text-gray-800 placeholder:text-gray-400 font-normal
                py-2 focus:outline-none focus:border-gray-400
                transition-colors duration-150
              "
                        />
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5">
                            <label className="text-[14px] font-semibold text-gray-800">
                                Trigger
                            </label>
                            <InfoIcon />
                        </div>
                        <div className="border-b border-gray-200 pb-2 focus-within:border-gray-400 transition-colors">
                            <Select
                                value={form.trigger}
                                onValueChange={setField("trigger")}
                                options={automationTriggers.map((t) => ({ value: t.key, label: t.label }))}
                                placeholder="When a new user joins"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-1.5">
                            <label className="text-[14px] font-semibold text-gray-800">
                                Category
                            </label>
                            <InfoIcon />
                        </div>
                        <div className="border-b border-gray-200 pb-2 focus-within:border-gray-400 transition-colors">
                            <Select
                                value={form.category}
                                onValueChange={setField("category")}
                                options={automationCategories.map((c) => ({ value: c.key, label: c.label }))}
                                placeholder="Send welcome DM"
                            />
                        </div>
                    </div>
                </div>


                <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                        <label
                            htmlFor="automation-message"
                            className="text-[14px] font-semibold text-gray-800"
                        >
                            Message
                        </label>
                        <InfoIcon />
                    </div>
                    <div>
                        <textarea
                            id="automation-message"
                            value={form.message}
                            onChange={(e) => setField("message")(e.target.value)}
                            placeholder="Enter message name..."
                            rows={3}
                            className="
                w-full bg-transparent border-0 border-b border-gray-200
                text-[15px] text-gray-800 placeholder:text-gray-400 font-normal
                py-2 focus:outline-none focus:border-gray-400
                transition-colors duration-150 resize-none
              "
                        />
                    </div>
                </div>
            </div>





            <div className="px-3 md:px-[24px] pb-3 md:pb-6">
                <button
                    onClick={handleSubmit}
                    className="
            w-full py-[20px] rounded-full
            bg-[#181925] 
            text-white text-[15px]  font-bold 
            
          "
                    style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
                >
                    Add automation
                </button>
            </div>
        </div>
    );
}