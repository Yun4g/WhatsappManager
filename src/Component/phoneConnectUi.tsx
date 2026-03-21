import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";


interface PropsType {
  setConnectMethodPhone: () => void,
}




export default function PhonePairingUi({setConnectMethodPhone}: PropsType) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [loading, setLoading] = useState(false);

  const handleSendCode = () => {
    setLoading(true);

   
    setTimeout(() => {
      setLoading(false);
      setStep("code");
    }, 2000);
  };

  const handleVerify = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
     
    }, 2000);
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
                <ArrowBigLeft className="h-4 w-4"/>
            </span>

            Back
          </button>
       </section>

      <section className="w-full bg-white rounded-3xl p-4 mt-[16px]">
        <h1 className="text-[#181925] text-[16px] font-bold">
          Connect via Phone
        </h1>

        <p className="text-[#999999] mt-1 text-sm">
          Enter your number to receive a pairing code
        </p>

        <div className="bg-[#F9F9F9] flex flex-col items-center w-full py-[33px] mt-[16px] rounded-[18px] px-4">

          {step === "phone" && (
            <>
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
            </>
          )}

          {step === "code" && (
            <>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter pairing code"
                className="w-full max-w-[260px] border rounded-xl px-4 py-2.5 text-sm bg-white"
              />

              <button
                onClick={handleVerify}
                className="mt-4 bg-[#181925] text-white px-4 py-2 rounded-xl text-sm font-semibold"
              >
                Verify Code
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}
