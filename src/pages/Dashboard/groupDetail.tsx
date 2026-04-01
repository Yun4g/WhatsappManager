import React, { useEffect } from "react";
import {
    Trash2,

} from "lucide-react";
import { GetGroupById } from "@/api/Groups";
import { useNavigate } from "react-router-dom";



type WhatsAppGroup = {
    id: number;
    user_id: number;
    group_wa_id: string;
    name: string;
    description: string;
    profile_picture: string;
    profile_picture_fetched_at: string;
    is_community: boolean;
    member_count: number;
    messaging_enabled: boolean;
    created_at: string;
    updated_at: string;
};

const GroupDetailsSkeleton: React.FC = () => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-sm p-4 space-y-4 animate-pulse">

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                        <div className="h-5 w-32 bg-gray-200 rounded mb-1" />
                        <div className="h-3 w-40 bg-gray-200 rounded" />
                    </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-gray-200" />
            </div>


            <div className="bg-[#fafafa] rounded-2xl p-4 space-y-4">
                <div>
                    <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-12 bg-gray-200 rounded" />
                        <div className="h-5 w-16 bg-gray-200 rounded-full" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-4">
                    <div>
                        <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
                        <div className="h-6 w-16 bg-gray-200 rounded mb-1" />
                        <div className="h-3 w-20 bg-gray-200 rounded mb-2" />
                        <div className="w-full h-2 bg-gray-200 rounded-full" />
                    </div>
                    <div>
                        <div className="h-4 w-28 bg-gray-200 rounded mb-2" />
                        <div className="h-6 w-16 bg-gray-200 rounded mb-1" />
                        <div className="h-3 w-20 bg-gray-200 rounded mb-2" />
                        <div className="w-full h-2 bg-gray-200 rounded-full" />
                    </div>
                </div>
            </div>


            <div className="bg-[#fafafa] rounded-2xl p-4 space-y-4">
                <div>
                    <div className="h-5 w-32 bg-gray-200 rounded mb-1" />
                    <div className="h-3 w-28 bg-gray-200 rounded" />
                </div>
                <div className="space-y-3">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200" />
                                <div>
                                    <div className="h-4 w-32 bg-gray-200 rounded mb-1" />
                                    <div className="h-3 w-24 bg-gray-200 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-6 bg-gray-200 rounded-full" />
                                <div className="w-4 h-4 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                    <div className="h-3 w-40 bg-gray-200 rounded" />
                    <div className="h-8 w-32 bg-gray-200 rounded-full" />
                </div>
            </div>


            <div className="bg-[#fafafa] rounded-2xl p-4 space-y-4">
                <div>
                    <div className="h-5 w-32 bg-gray-200 rounded mb-1" />
                    <div className="h-3 w-28 bg-gray-200 rounded" />
                </div>
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-200" />
                                <div>
                                    <div className="h-4 w-28 bg-gray-200 rounded mb-1" />
                                    <div className="h-3 w-20 bg-gray-200 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-3 w-20 bg-gray-200 rounded" />
                                <div className="w-4 h-4 bg-gray-200 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between pt-3">
                    <div className="flex gap-2">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="w-8 h-8 bg-gray-200 rounded-md" />
                        ))}
                    </div>
                    <div className="h-8 w-28 bg-gray-200 rounded-full" />
                </div>
            </div>
        </div>
    );
};




const GroupDetails: React.FC = () => {
    const groupId = window.location.pathname.split("/Groups/")[1];
    console.log(groupId, 'groupId in group details');

    interface ScheduledMessage {
        title: string;
        status: "Pending" | "Sent";
        type: string;
        date: string;
    }

    interface GroupAutomation {
        icon: React.ReactNode;
        title: string;
        description: string;
        enabled: boolean;
    }

    const mockData = {
        groupMembers: 237,
        messages: "1.6k messages",
        automationUsage: 10,
        scheduledMessages: [
            {
                title: "Logistics Meeting",
                status: "Pending",
                type: "Direct Message",
                date: "May 12, 2025| 8:00PM",
            },
            {
                title: "Interviews",
                status: "Pending",
                type: "Group Message",
                date: "May 15, 2025| 9:00AM",
            },
            {
                title: "Daily Boost",
                status: "Sent",
                type: "Group Message",
                date: "May 18, 2025| 10:00AM",
            },
            {
                title: "Daily Boost",
                status: "Pending",
                type: "Group Message",
                date: "May 18, 2025| 10:00AM",
            },
            {
                title: "Daily Boost",
                status: "Pendingt",
                type: "Group Message",
                date: "May 18, 2025| 10:00AM",
            },
        ] as ScheduledMessage[],
        groupAutomations: [
            {
                icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F5F5F5" />
                        <path d="M30 14.0001V16.4201C30 18.0001 29 19.0001 27.42 19.0001H24V12.0101C24 10.9001 24.91 9.99008 26.02 10.0001C27.11 10.0101 28.11 10.4501 28.83 11.1701C29.55 11.9001 30 12.9001 30 14.0001Z" fill="#999999" />
                        <path opacity="0.4" d="M10 15V29C10 29.83 10.94 30.3 11.6 29.8L13.31 28.52C13.71 28.22 14.27 28.26 14.63 28.62L16.29 30.29C16.68 30.68 17.32 30.68 17.71 30.29L19.39 28.61C19.74 28.26 20.3 28.22 20.69 28.52L22.4 29.8C23.06 30.29 24 29.82 24 29V12C24 10.9 24.9 10 26 10H15H14C11 10 10 11.79 10 14V15Z" fill="#999999" />
                        <path d="M20 20.2598H17C16.59 20.2598 16.25 20.5998 16.25 21.0098C16.25 21.4198 16.59 21.7598 17 21.7598H20C20.41 21.7598 20.75 21.4198 20.75 21.0098C20.75 20.5998 20.41 20.2598 20 20.2598Z" fill="#999999" />
                        <path d="M17 17.7598H20C20.41 17.7598 20.75 17.4198 20.75 17.0098C20.75 16.5998 20.41 16.2598 20 16.2598H17C16.59 16.2598 16.25 16.5998 16.25 17.0098C16.25 17.4198 16.59 17.7598 17 17.7598Z" fill="#999999" />
                        <path d="M13.9697 16.0098C13.4097 16.0098 12.9697 16.4598 12.9697 17.0098C12.9697 17.5598 13.4197 18.0098 13.9697 18.0098C14.5197 18.0098 14.9697 17.5598 14.9697 17.0098C14.9697 16.4598 14.5197 16.0098 13.9697 16.0098Z" fill="#999999" />
                        <path d="M13.9697 20.0098C13.4097 20.0098 12.9697 20.4598 12.9697 21.0098C12.9697 21.5598 13.4197 22.0098 13.9697 22.0098C14.5197 22.0098 14.9697 21.5598 14.9697 21.0098C14.9697 20.4598 14.5197 20.0098 13.9697 20.0098Z" fill="#999999" />
                    </svg>
                ),
                title: "When a new user joins",
                description: "Send a welcome DM",
                enabled: true,
            },
            {
                icon: (
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F5F5F5" />
                        <path d="M30 14.0001V16.4201C30 18.0001 29 19.0001 27.42 19.0001H24V12.0101C24 10.9001 24.91 9.99008 26.02 10.0001C27.11 10.0101 28.11 10.4501 28.83 11.1701C29.55 11.9001 30 12.9001 30 14.0001Z" fill="#999999" />
                        <path opacity="0.4" d="M10 15V29C10 29.83 10.94 30.3 11.6 29.8L13.31 28.52C13.71 28.22 14.27 28.26 14.63 28.62L16.29 30.29C16.68 30.68 17.32 30.68 17.71 30.29L19.39 28.61C19.74 28.26 20.3 28.22 20.69 28.52L22.4 29.8C23.06 30.29 24 29.82 24 29V12C24 10.9 24.9 10 26 10H15H14C11 10 10 11.79 10 14V15Z" fill="#999999" />
                        <path d="M20 20.2598H17C16.59 20.2598 16.25 20.5998 16.25 21.0098C16.25 21.4198 16.59 21.7598 17 21.7598H20C20.41 21.7598 20.75 21.4198 20.75 21.0098C20.75 20.5998 20.41 20.2598 20 20.2598Z" fill="#999999" />
                        <path d="M17 17.7598H20C20.41 17.7598 20.75 17.4198 20.75 17.0098C20.75 16.5998 20.41 16.2598 20 16.2598H17C16.59 16.2598 16.25 16.5998 16.25 17.0098C16.25 17.4198 16.59 17.7598 17 17.7598Z" fill="#999999" />
                        <path d="M13.9697 16.0098C13.4097 16.0098 12.9697 16.4598 12.9697 17.0098C12.9697 17.5598 13.4197 18.0098 13.9697 18.0098C14.5197 18.0098 14.9697 17.5598 14.9697 17.0098C14.9697 16.4598 14.5197 16.0098 13.9697 16.0098Z" fill="#999999" />
                        <path d="M13.9697 20.0098C13.4097 20.0098 12.9697 20.4598 12.9697 21.0098C12.9697 21.5598 13.4197 22.0098 13.9697 22.0098C14.5197 22.0098 14.9697 21.5598 14.9697 21.0098C14.9697 20.4598 14.5197 20.0098 13.9697 20.0098Z" fill="#999999" />
                    </svg>
                ),
                title: "Inactive > 15 days",
                description: "Send a follow-up DM",
                enabled: false,
            },
        ],
    };

    const [groupData, setGroupData] = React.useState<WhatsAppGroup | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);
    // const [open, setOpen] = React.useState<boolean>(false);




    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [groupAutomations, setGroupAutomations] = React.useState<GroupAutomation[]>(mockData.groupAutomations);
    const scheduledMessages: ScheduledMessage[] = mockData.scheduledMessages;
    const navigate = useNavigate();
    console.log(groupData, 'group data in group details');
    const itemsPerPage = 4;
    const totalPages = Math.max(1, Math.ceil(scheduledMessages.length / itemsPerPage));
    const currentPageItems = scheduledMessages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const toggleAutomation = (index: number) => {
        setGroupAutomations((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, enabled: !item.enabled } : item
            )
        );
    };



    useEffect(() => {
        let isMounted = true;

        const fetchGroups = async () => {
            setLoading(true);
            try {
                const res = await GetGroupById(groupId);

                if (isMounted) {
                    setGroupData(res.group[0] || null);
                }
            } catch (error) {
                console.log(error);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchGroups();

        return () => {
            isMounted = false;
        };
    }, []);


    if (loading) {
        return <GroupDetailsSkeleton />;
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="w-[38px] h-[38px] rounded-full overflow-hidden" >
                        {groupData?.profile_picture ? (
                            <img src={groupData?.profile_picture} className="h-full w-full" alt="Group picture" />
                        ) : (
                            <div className="h-full w-full bg-gradient-to-tr from-purple-400 to-orange-300">

                            </div>
                        )
                        
                        }

                      
                    </div>

                    <div>
                        <h1 className="font-bold text-xl md:text-[24px] text-[#171717] break-words">{groupData?.name}</h1>
                        <p className="text-xs font-medium text-[#999999]">
                            View and manage group
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/Groups')}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="19" fill="white" />
                        <path d="M14.1299 25.3101H22.1299C24.8899 25.3101 27.1299 23.0701 27.1299 20.3101C27.1299 17.5501 24.8899 15.3101 22.1299 15.3101H11.1299" stroke="#181925" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.4301 17.8099L10.8701 15.2499L13.4301 12.6899" stroke="#181925" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>

            <div className="w-full   rounded-2xl   space-y-[14px]">
                <div className="rounded-2xl bg-white px-4 pt-4 pb-[32px] space-y-4">
                    <div>
                        <p className="text-[#999999] text-sm font-medium">Group Members</p>
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl text-[#181925] font-bold">{groupData?.member_count}</h2>
                            <span className="text-xs bg-[#F5F5F5] px-2 py-1 text-[#181925] font-bold rounded-full">
                                {mockData.messages}
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t mt-[21px] pt-[21px]">

                        <div>
                            <p className="text-[#999999] text-sm font-medium">Automation Usage</p>
                            <h3 className="text-xl text-[#171717] font-bold ">{mockData.automationUsage}</h3>
                            <p className="text-xs text-gray-400 mt-7 flex items-center gap-1">
                                4/{mockData.automationUsage} used
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.9421 11.9798L13.5054 5.4165L14.5837 6.49476L8.02035 13.0581H13.8051V14.5832H5.41699V6.19507H6.9421V11.979V11.9798Z" fill="#FB3748" />
                                    </svg>

                                </span>
                            </p>
                            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                <div className="w-[40%] h-full bg-[#FA7319] rounded-full" />
                            </div>
                        </div>


                        <div>
                            <p className="text-[#999999] text-sm font-medium">Scheduled Message</p>
                            <h3 className="text-xl text-[#171717] font-bold ">5</h3>
                            <p className="text-xs text-gray-400 mt-7 flex items-center gap-1">
                                3/5 used
                                <span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.9421 11.9798L13.5054 5.4165L14.5837 6.49476L8.02035 13.0581H13.8051V14.5832H5.41699V6.19507H6.9421V11.979V11.9798Z" fill="#FB3748" />
                                    </svg>

                                </span>
                            </p>
                            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                <div className="w-[60%] h-full bg-[#335CFF] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rounded-2xl bg-white ">
                    <div className="px-4 pt-4">
                        <h2 className="font-bold text-base text-[#181925]">Group Automation</h2>
                        <p className="text-sm text-[#999999] font-medium">Automate settings</p>
                    </div>


                    {groupAutomations.map((automation, index) => (
                        <div key={index} className="flex items-center justify-between p-4 mt-3">
                            <div className="flex items-center gap-3">
                                <div>
                                    {automation.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-[#181925] font-bold">
                                        {automation.title}
                                    </p>
                                    <p className="text-xs text-[#5C5C5C] font-medium">
                                        {automation.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => toggleAutomation(index)}
                                    aria-label={`Toggle ${automation.title}`}
                                    className={`w-10 h-6 rounded-full flex items-center p-1 transition ${automation.enabled ? 'bg-black' : 'bg-gray-300'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full transition ${automation.enabled ? 'ml-auto' : ''}`} />
                                </button>
                                <Trash2 size={16} className="text-gray-400" />
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-wrap justify-between items-center px-4 py-2 border-t">
                        <p className="text-xs flex items-center gap-1 text-[#999999] font-medium">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8.89268 10.5669L8.97252 10.2405C8.93119 10.2599 8.86456 10.2821 8.77319 10.3073C8.68157 10.3326 8.59912 10.3454 8.52665 10.3454C8.37229 10.3454 8.26362 10.3201 8.20052 10.2693C8.13789 10.2184 8.10665 10.1227 8.10665 9.98262C8.10665 9.9271 8.11607 9.84434 8.13579 9.73602C8.15489 9.62699 8.17686 9.53009 8.20129 9.44533L8.49935 8.39007C8.52855 8.29323 8.54857 8.18675 8.55933 8.07055C8.57034 7.9546 8.57546 7.87348 8.57546 7.82744C8.57546 7.60491 8.49746 7.42433 8.34141 7.28503C8.18536 7.14583 7.96315 7.07623 7.67517 7.07623C7.51492 7.07623 7.34551 7.10471 7.16621 7.1616C6.98691 7.21835 6.79946 7.28672 6.60337 7.36656L6.52332 7.6932C6.58175 7.67159 6.65135 7.64834 6.73278 7.62427C6.81386 7.6003 6.89339 7.58791 6.97078 7.58791C7.12877 7.58791 7.23519 7.61485 7.29096 7.6679C7.34674 7.72112 7.37475 7.81576 7.37475 7.95107C7.37475 8.02589 7.36589 8.10901 7.3475 8.19935C7.32937 8.29025 7.30674 8.38638 7.28011 8.48784L6.98076 9.54735C6.95413 9.65869 6.93467 9.7583 6.92243 9.84675C6.91029 9.93509 6.90445 10.0218 6.90445 10.1061C6.90445 10.3239 6.98491 10.5034 7.14577 10.645C7.30664 10.7861 7.53218 10.8571 7.82215 10.8571C8.01098 10.8571 8.17671 10.8325 8.31934 10.7828C8.46181 10.7334 8.65315 10.6614 8.89268 10.5669ZM8.83957 6.28016C8.97882 6.15105 9.04811 5.99403 9.04811 5.81017C9.04811 5.62673 8.97892 5.4694 8.83957 5.33865C8.70068 5.20826 8.53326 5.14286 8.33752 5.14286C8.14116 5.14286 7.97308 5.2081 7.83286 5.33865C7.69263 5.4694 7.62237 5.62667 7.62237 5.81017C7.62237 5.99403 7.69263 6.151 7.83286 6.28016C7.97334 6.40973 8.14111 6.47457 8.33752 6.47457C8.53331 6.47457 8.70068 6.40973 8.83957 6.28016Z" fill="#999999" />
                                </svg>

                            </span>
                            Add, deactivate or delete automation
                        </p>
                        <button 
                        
                        className="px-2 py-4 mt-4 md:mt-0 flex items-center gap-1 text-[#181925] rounded-full border text-sm">
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="#181925" />
                                </svg>

                            </span>
                            New Automation
                        </button>
                    </div>
                </div>


                <div className="rounded-2xl bg-white space-y-4  mb-4  ">
                    <div className="px-5 py-4 ">
                        <h2 className="font-bold  text-base">Scheduled Messages</h2>
                        <p className="text-sm text-[#999999] font-medium">Automate settings</p>
                    </div>

                    {currentPageItems.map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-row items-start md:items-center justify-between px-5 gap-3"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#F5F5F5" />
                                        <path d="M28 14.75C29.5188 14.75 30.75 13.5188 30.75 12C30.75 10.4812 29.5188 9.25 28 9.25C26.4812 9.25 25.25 10.4812 25.25 12C25.25 13.5188 26.4812 14.75 28 14.75Z" fill="#999999" />
                                        <path opacity="0.4" d="M28 16C25.79 16 24 14.21 24 12C24 11.27 24.21 10.59 24.56 10H15C12.24 10 10 12.23 10 14.98V20.96V21.96C10 24.71 12.24 26.94 15 26.94H16.5C16.77 26.94 17.13 27.12 17.3 27.34L18.8 29.33C19.46 30.21 20.54 30.21 21.2 29.33L22.7 27.34C22.89 27.09 23.19 26.94 23.5 26.94H25C27.76 26.94 30 24.71 30 21.96V15.44C29.41 15.79 28.73 16 28 16Z" fill="#999999" />
                                        <path d="M20 20C19.44 20 19 19.55 19 19C19 18.45 19.45 18 20 18C20.55 18 21 18.45 21 19C21 19.55 20.56 20 20 20Z" fill="#999999" />
                                        <path d="M24 20C23.44 20 23 19.55 23 19C23 18.45 23.45 18 24 18C24.55 18 25 18.45 25 19C25 19.55 24.56 20 24 20Z" fill="#999999" />
                                        <path d="M16 20C15.44 20 15 19.55 15 19C15 18.45 15.45 18 16 18C16.55 18 17 18.45 17 19C17 19.55 16.56 20 16 20Z" fill="#999999" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="font-medium text-[#171717] text-sm">{item.title}</p>
                                    <p
                                        className={`text-xs flex items-center gap-1 font-medium ${item.status === "Sent"
                                            ? "text-[#1FC16B]"
                                            : "text-[#F6B51E]"
                                            }`}
                                    >
                                        <span className=" text-xs text-[#999999] font-medium">
                                            Status {" "}•
                                        </span>
                                        {" "}
                                        <span className="flex items-center gap-1">
                                            {
                                                item.status === "Sent" ? (
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#1FC16B" />
                                                    </svg>
                                                ) : (
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 6C0 9.31368 2.68629 12 6 12C9.31368 12 12 9.31368 12 6C12 2.68629 9.31368 0 6 0C2.68629 0 0 2.68629 0 6ZM10.8 6C10.8 8.65098 8.65098 10.8 6 10.8C3.34903 10.8 1.2 8.65098 1.2 6C1.2 3.34903 3.34903 1.2 6 1.2C8.65098 1.2 10.8 3.34903 10.8 6ZM9.6 6C9.6 7.98822 7.98822 9.6 6 9.6V2.4C7.98822 2.4 9.6 4.01177 9.6 6Z" fill="#F6B51E" />
                                                    </svg>

                                                )
                                            }
                                            {item.status}
                                        </span>

                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs w-full md:w-auto justify-between">
                                <div className="flex flex-col items-start sm:items-end gap-1">
                                    <span className=" text-sm text-[#181925] font-medium">{item.type}</span>
                                    <span className=" text-[#999999] text-xs font-medium">{item.date}</span>
                                </div>

                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.1253 18.0582C15.7003 17.1165 18.3337 13.8665 18.3337 9.99984C18.3337 5.39984 14.6337 1.6665 10.0003 1.6665C4.44199 1.6665 1.66699 6.29984 1.66699 6.29984M1.66699 6.29984V2.49984M1.66699 6.29984H3.34199H5.36699" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.66699 10C1.66699 14.6 5.40033 18.3333 10.0003 18.3333" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                                </svg>

                            </div>
                        </div>
                    ))}


                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between mt-6 border-t p-[15px]">
                        <div className="flex items-center gap-2">
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 disabled:opacity-40"
                            >
                                ‹
                            </button>

                            {[...Array(totalPages)].map((_, i) => {
                                const page = i + 1;
                                if (page > 5) return null;

                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-8 h-8 p-[4px] rounded-lg text-sm flex text-[#999999] items-center justify-center transition ${currentPage === page
                                            ? "bg-[#F9F9F9] font-semibold"
                                            : "border"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            {totalPages > 5 && (
                                <span className="px-2 text-gray-400">...</span>
                            )}

                            <button
                                disabled={currentPage === totalPages}
                                onClick={() =>
                                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                                }
                                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 disabled:opacity-40"
                            >
                                ›
                            </button>

                        </div>
                        <button className="px-2 py-4 my-10  md:my-0 flex items-center gap-1 text-[#181925] rounded-full border text-sm">
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="#181925" />
                                </svg>

                            </span>
                            New Message
                            
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default GroupDetails;