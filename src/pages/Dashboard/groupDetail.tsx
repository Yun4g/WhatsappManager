import React from "react";
import {
  ArrowLeft,
  MessageCircle,
  Trash2,
  RotateCcw,
} from "lucide-react";

const GroupDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-4 space-y-4">

      
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-400 to-orange-300" />
            <div>
              <h1 className="font-semibold text-lg">Adullam Group</h1>
              <p className="text-sm text-gray-400">
                View and manage group
              </p>
            </div>
          </div>

          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100">
            <ArrowLeft size={18} />
          </button>
        </div>

       
        <div className="bg-[#fafafa] rounded-2xl p-4 space-y-4">
          <div>
            <p className="text-gray-400 text-sm">Group Members</p>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">237</h2>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                1.6k messages
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t pt-4">
           
            <div>
              <p className="text-gray-400 text-sm">Automation Usage</p>
              <h3 className="text-xl font-semibold">10</h3>
              <p className="text-xs text-gray-400 mt-1">4/10 used ❌</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-[40%] h-full bg-orange-500 rounded-full" />
              </div>
            </div>

          
            <div>
              <p className="text-gray-400 text-sm">Scheduled Message</p>
              <h3 className="text-xl font-semibold">5</h3>
              <p className="text-xs text-gray-400 mt-1">3/5 used ❌</p>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-[60%] h-full bg-blue-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-[#fafafa] rounded-2xl p-4 space-y-4">
          <div>
            <h2 className="font-semibold">Group Automation</h2>
            <p className="text-sm text-gray-400">Automate settings</p>
          </div>

          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="font-medium text-sm">
                  When a new user joins
                </p>
                <p className="text-xs text-gray-400">
                  Send a welcome DM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-black rounded-full flex items-center p-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
              <Trash2 size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="flex items-center justify-between opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="font-medium text-sm">Inactive &gt; 15 days</p>
                <p className="text-xs text-gray-400">
                  Send a follow-up DM
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-gray-300 rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <Trash2 size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="flex justify-between items-center pt-2 border-t">
            <p className="text-xs text-gray-400">
              Add, deactivate or delete automation
            </p>
            <button className="px-3 py-2 rounded-full border text-sm">
              + New Automation
            </button>
          </div>
        </div>

    
        <div className="bg-[#fafafa] rounded-2xl p-4 space-y-4">
          <div>
            <h2 className="font-semibold">Scheduled Messages</h2>
            <p className="text-sm text-gray-400">Automate settings</p>
          </div>

          {[
            {
              title: "Logistics Meeting",
              status: "Pending",
              type: "Direct Message",
            },
            {
              title: "Interviews",
              status: "Pending",
              type: "Group Message",
            },
            {
              title: "Daily Boost",
              status: "Sent",
              type: "Group Message",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p
                    className={`text-xs ${
                      item.status === "Sent"
                        ? "text-green-500"
                        : "text-yellow-500"
                    }`}
                  >
                    Status • {item.status}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <span>{item.type}</span>
                <RotateCcw size={16} />
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between pt-3">
            <div className="flex gap-2">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 rounded-md ${
                    n === 2
                      ? "bg-gray-200"
                      : "bg-white border"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>

            <button className="px-3 py-2 rounded-full border text-sm">
              + New Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;