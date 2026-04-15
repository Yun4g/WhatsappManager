import React from "react";

type StatItem = {
  label: string;
  value: string | number;
  sub: string;
  color: "orange" | "yellow" | "teal";
};

const stats: StatItem[] = [
  {
    label: "Groups Managed",
    value: 16,
    sub: "groups",
    color: "orange",
  },
  {
    label: "Scheduled Messages",
    value: "7/10",
    sub: "sent",
    color: "yellow",
  },
  {
    label: "Group Automations",
    value: "3/10",
    sub: "used",
    color: "teal",
  },
];

const colorMap = {
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  teal: "bg-teal-400",
};

const widthMap = {
  orange: "w-[30%]",
  yellow: "w-[55%]",
  teal: "w-[15%]",
};

const GroupStats: React.FC = () => {
  return (
    <div className="w-full bg-[#F9F9F9] rounded-2xl p-5 sm:p-6 md:p-7">
      
  
      <div className="mb-5">

        <h2 className="text-lg sm:text-xl font-semibold text-[#181925]">
          Group Stat
        </h2>

        <p className="text-sm text-[#8E8E8E]">
          Find and select groups to manage
        </p>

      </div>

  
      <h3 className="text-base sm:text-lg font-semibold text-[#181925] mb-4">
        Platform Analytics
      </h3>

    
      <div className="flex items-center gap-2 mb-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`h-3 rounded-full ${colorMap[item.color]} ${widthMap[item.color]}`}
          />
        ))}
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        {stats.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${colorMap[item.color]}`}
            />
            <p className="text-sm text-[#8E8E8E]">{item.label}</p>
          </div>
        ))}
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start sm:items-center py-3 sm:py-0"
          >
            <h4 className="text-xl font-bold text-[#181925]">
              {item.value}
            </h4>
            <p className="text-sm text-[#8E8E8E]">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupStats;