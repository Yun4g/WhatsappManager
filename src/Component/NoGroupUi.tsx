import React from "react";

const GroupsCard: React.FC = () => {
    return (
        <div className="">

            <div className="">
                <h2 className="text-[16px] font-bold text-[#181925]">
                    Groups
                </h2>
                <p className="text-[14px] text-[#999999] font-medium ">
                    Check group info
                </p>
            </div>


            <div className="flex flex-col items-center justify-center text-center py-[25px]">

                <div>

                    <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#F5F5F5" />
                        <path d="M19.1803 13V14.1588M23.5505 14.8103L22.7311 15.6297M15.6296 22.7311L14.8102 23.5505M14.1588 19.1803H13M15.6296 15.6296L14.8102 14.8102M21.6034 26.7519L18.7174 19.2163C18.5979 18.9042 18.9042 18.5979 19.2163 18.7174L26.7519 21.6034C27.0512 21.7181 27.0887 22.1265 26.8151 22.2937L24.0883 23.9601C24.036 23.992 23.992 24.036 23.9601 24.0883L22.2937 26.8151C22.1265 27.0887 21.7181 27.0512 21.6034 26.7519Z" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>


                <p className="text-[14px] font-medium text-[#999999]  leading-[20px] max-w-[250px] mt-2">
                    No groups or communities created. Sync your WhatsApp to the platform
                </p>
            </div>
        </div>
    );
};

export default GroupsCard;