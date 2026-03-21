import { getUser } from "@/api/user";
import { useEffect, useState } from "react";

import { Outlet, useLocation } from "react-router-dom";

interface Nav {
    icon: React.ReactNode;
    label: string;
    path: string;
}

function Layout() {
    const location = useLocation();
    const [userData, setUserData] = useState();
    console.log(userData, 'userData')
    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser();
            setUserData(data);
        };

        fetchUser();
    }, []);
    const NavItem: Nav[] = [
        {
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.2935 1.3335H11.7002C14.0735 1.3335 14.6668 1.92683 14.6668 4.2935V8.5135C14.6668 10.8868 14.0735 11.4735 11.7068 11.4735H4.2935C1.92683 11.4802 1.3335 10.8868 1.3335 8.52016V4.2935C1.3335 1.92683 1.92683 1.3335 4.2935 1.3335Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M8 11.48V14.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.3335 8.6665H14.6668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 14.6665H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            label: "Home",
            path: "/dashboard",
        },
        {
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.6665 5.3335C13.7711 5.3335 14.6665 4.43807 14.6665 3.3335C14.6665 2.22893 13.7711 1.3335 12.6665 1.3335C11.5619 1.3335 10.6665 2.22893 10.6665 3.3335C10.6665 4.43807 11.5619 5.3335 12.6665 5.3335Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M4.6665 8.6665H7.99984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.6665 11.3335H10.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M9.3335 1.3335H6.00016C2.66683 1.3335 1.3335 2.66683 1.3335 6.00016V10.0002C1.3335 13.3335 2.66683 14.6668 6.00016 14.6668H10.0002C13.3335 14.6668 14.6668 13.3335 14.6668 10.0002V6.66683"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            label: "Groups",
            path: "/dashboard/Groups",
        },
        {
            icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.6665 5.3335C13.7711 5.3335 14.6665 4.43807 14.6665 3.3335C14.6665 2.22893 13.7711 1.3335 12.6665 1.3335C11.5619 1.3335 10.6665 2.22893 10.6665 3.3335C10.6665 4.43807 11.5619 5.3335 12.6665 5.3335Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M4.6665 8.6665H7.99984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.6665 11.3335H10.6665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                        d="M9.3335 1.3335H6.00016C2.66683 1.3335 1.3335 2.66683 1.3335 6.00016V10.0002C1.3335 13.3335 2.66683 14.6668 6.00016 14.6668H10.0002C13.3335 14.6668 14.6668 13.3335 14.6668 10.0002V6.66683"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            label: "Pricing",
            path: "/dashboard/Pricing",
        },
    ];

    return (
        <section className="bg-[#F9F9F9]">
            <main className="max-w-3xl mx-auto h-screen relative flex flex-col overflow-hidden">

                <header className="flex justify-between items-center py-6 absolute  w-full top-0 z-20 
                         bg-white/10 backdrop-blur-lg">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.19971 3.19971H15.9997C23.069 3.19971 28.7997 8.93046 28.7997 15.9997H15.9997C8.93046 15.9997 3.19971 10.269 3.19971 3.19971Z" fill="#181925" />
                                    <path d="M3.19971 16H15.9997C23.069 16 28.7997 21.7308 28.7997 28.8H15.9997C8.93046 28.8 3.19971 23.0692 3.19971 16Z" fill="#181925" />
                                </svg>
                            </span>

                            <div>
                                <p className="text-[12px] text-[#242424] font-bold">Braide Shekinah</p>
                                <p className="text-[#B5B5B5] text-[10px] font-medium">0812 407 6934</p>
                            </div>
                        </div>

                        <button>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_184_589)">
                                    <path d="M4 9.5L8 13.5L12 9.5" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 6.5L8 2.5L12 6.5" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_184_589">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>

                    <div>
                        <img
                            src={"/placeholderManjaer.jpg"}
                            alt="user profile"
                            className="h-[30px] w-[30px] rounded-full"
                        />
                    </div>
                </header>

                <section className="flex-1 h-full overflow-y-auto hide-scrollbar">
                    <aside className="w-[244px] h-full shrink-0 absolute left-0 top-[160px]">
                        {NavItem.map((item) => (
                            <div
                                key={item.path}
                                className={`flex items-center gap-2 mt-[12px] ${location.pathname.startsWith(item.path)
                                        ? "text-[#181925]"
                                        : "text-[#999999]"
                                    }`}
                            >
                                {item.icon}
                                <a href={item.path} className="text-sm font-bold">
                                    {item.label}
                                </a>
                            </div>
                        ))}
                    </aside>

                    <div className="flex-1 ml-[265px] mt-[160px] ">
                        <Outlet />
                    </div>
                </section>
            </main>
        </section>
    );
}

export default Layout;
