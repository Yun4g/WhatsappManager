import { Link } from "react-router-dom";

interface ConnectPromptProps {
  visible: boolean;
  message?: string;
}

export default function ConnectPrompt({ visible, message }: ConnectPromptProps) {
  return (
    <section
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-lg px-4 pt-4">
        <div className="rounded-b-[28px] bg-white p-6 shadow-2xl border border-slate-200">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Connect your WhatsApp account</h2>
              <p className="mt-2 text-sm text-slate-600">
                {message || "You must connect your WhatsApp account before accessing this feature."}
              </p>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center text-center rounded-full bg-[#181925] px-3 py-3 text-xs font-semibold text-white shadow-sm hover:bg-slate-900 transition"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
