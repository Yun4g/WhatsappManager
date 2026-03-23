
import { getUser } from "@/api/user";
import { useUserStore } from "@/store/userData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";

interface Nav {
    icon: React.ReactNode;
    label: string;
    path: string;
}

function Layout() {
    const location = useLocation();
    const setUser = useUserStore(state => state.setUserData)

    const user = useUserStore(state => state.user)
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
    const [loading, setLoading] = useState<boolean>(false)



    const fetchUser = async () => {

        try {
            setLoading(true);
            const res = await getUser();
            if (!res) {
                console.log("User data is undefined");
                return;
            }

            setUser({
                id: res.id,
                email: res.email,
                name: res.name,
                profile_pic: res.profile_pic,
                connected: res.connected,
            });
        } catch (error) {
            console.log(error);
             toast.error("Error Getting user data")
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser()
    }, [])



    if (loading) {
        return (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-3 shadow">
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-[#1A3A2A] rounded-full animate-spin" />
                    <p className="text-sm font-medium text-gray-700">Processing...</p>
                </div>
            </div>
        );
    }









    return (
        <section className="bg-[#F9F9F9] h-screen overflow-y-hidden border-2">
            <main className="max-w-3xl w-full mx-auto   relative flex flex-col ">

                <header className="flex justify-between items-center py-4 px-4 md:px-0 md:py-6 absolute w-full top-0 z-20 
                         bg-white/10 backdrop-blur-lg">
                    <div className="flex items-center gap-3 md:gap-6">
                        <div className="flex items-center gap-2">
                            <span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.19971 3.19971H15.9997C23.069 3.19971 28.7997 8.93046 28.7997 15.9997H15.9997C8.93046 15.9997 3.19971 10.269 3.19971 3.19971Z" fill="#181925" />
                                    <path d="M3.19971 16H15.9997C23.069 16 28.7997 21.7308 28.7997 28.8H15.9997C8.93046 28.8 3.19971 23.0692 3.19971 16Z" fill="#181925" />
                                </svg>
                            </span>

                            <div>
                                <p className="text-[12px] text-[#242424] font-bold">{user?.name}</p>
                                <p className="text-[#B5B5B5] text-[10px] font-medium">{user?.email}</p>
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
                            src={user?.profile_pic || "/placeholderManjaer.jpg"}
                            alt="user profile"
                            className="h-[30px] w-[30px] rounded-full"
                        />
                    </div>
                </header>

                <section className=" block  md:flex-1 h-full overflow-y-auto  hide-scrollbar">
                    <aside className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex justify-around py-2 md:py-0 md:block md:w-[244px] md:h-full md:shrink-0 md:absolute md:left-0 md:top-[160px] md:bottom-auto md:bg-transparent md:border-none md:z-auto">
                       
                        {NavItem.map((item) => (
                            <div
                                key={item.path}
                                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 md:mb-[12px] ${location.pathname.startsWith(item.path)
                                    ? "text-[#181925]"
                                    : "text-[#999999]"
                                    }`}
                            >
                                {item.icon}
                                <a href={item.path} className="text-[10px] md:text-sm font-bold">
                                    {item.label}
                                </a>
                            </div>
                        ))}
                    </aside>



                    <div className=" overflow-y-auto  py-24 px-4  md:p-0 md:flex-1 md:ml-[245px] md:pt-[160px] h-screen hide-scrollbar ">
                        <Outlet />
                    </div>
                </section>
            </main>
        </section>
    );
}

export default Layout;
