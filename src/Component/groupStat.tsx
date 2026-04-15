import { useUserStore } from "@/store/userData";
import React from "react";

type StatKey = "groups_managed" | "scheduled_messages" | "groups_automation";

type StatItem = {
  key: StatKey;
  label: string;
  sub: string;
  color: "orange" | "yellow" | "teal";
};

const stats: StatItem[] = [
  {
    key: "groups_managed",
    label: "Groups Managed",
    sub: "groups",
    color: "orange",
  },
  {
    key: "scheduled_messages",
    label: "Scheduled Messages",
    sub: "sent",
    color: "yellow",
  },
  {
    key: "groups_automation",
    label: "Group Automations",
    sub: "used",
    color: "teal",
  },
];

const colorMap = {
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  teal: "bg-teal-400",
};

const GroupStats: React.FC = () => {
  const user = useUserStore((state) => state.user);


  const total = Number(user?.total ?? 0);

  return (
    <div className="w-full  p-4">
      
   
      <div className="mb-[24px] ">
        <h2 className="text-base  font-bold text-[#181925]">
          Group Stat
        </h2>
        <p className="text-sm text-[#999999]">
          Find and select groups to manage
        </p>
      </div>

   
      <h3 className="text-base sm:text-lg font-semibold text-[#181925] mb-4">
        Platform Analytics
      </h3>

     
      <div className="flex items-center gap-2 mb-6 h-3">
        {stats.map((item, idx) => {
          const value = Number(user?.[item.key] ?? 0);
          const percentage = total ? (value / total) * 100 : 0;

          return (
            <div
              key={idx}
              className={`h-[14px] rounded-[10px] ${colorMap[item.color]} transition-all duration-500`}
              style={{ width: `${percentage}%` }}
            />
          );
        })}
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-[16px]">
        {stats.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 justify-start ">
            <span
              className={`w-2.5 h-2.5 rounded-full ${colorMap[item.color]}`}
            />
            <p className="text-sm text-[#8E8E8E] text-center sm:text-left">
              {item.label}
            </p>
          </div>
        ))}
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
        {stats.map((item, idx) => {
          const value = Number(user?.[item.key] ?? 0);

          return (
            <div key={idx} className="py-2 flex flex-col items-center justify-center">
              <h4 className="text-sm font-bold text-[#181925]">
                {item.key === "groups_managed"
                  ? value
                  : `${value}/10`}
              </h4>
              <p className="text-[12px] font-medium text-[#A3A3A3] ">{item.sub}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupStats;