import { useUserStore } from "@/store/userData";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Group {
    id: number,
    name: string,
    description: string,
    profilePicture: string,
    isCommunity: boolean,
    memberCount: number
}



export default function GroupManager() {
    const [selected, setSelected] = useState<number[]>([]);
    const [open, setOpen] = useState(false);
    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const user = useUserStore(state => state.user)
    console.log(groups)


    const toggleGroup = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(groups.length / itemsPerPage);

    const paginatedGroups = groups.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const selectedGroups = groups.filter((g) => selected.includes(g.id));

    useEffect(() => {
    if (!user?.id) return;

    let es: EventSource | null = null;
    let reconnectTimeout: NodeJS.Timeout | null = null;

    const connectSSE = () => {
        setLoading(true);
        es = new EventSource(
            `https://manajer-22u7.onrender.com/data/whatsapp/groups`
        );

        es.addEventListener("groups_batch", (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.groups) {
                    setGroups(data.groups);
                }
                setLoading(false);
            } catch (err) {
                console.error("Failed to parse groups SSE:", err);
                setLoading(false);
            }
        });

        es.onerror = (event) => {
            console.log("SSE error", event);

            if (es) es.close();

        
            fetch(`https://manajer-22u7.onrender.com/data/whatsapp/groups`, { method: 'HEAD' })
                .then(res => {
                    if (res.status === 401) {
                        console.log("Session expired");
                        toast.error('Session expired. Please login again.');
                        setTimeout(() => {
                            window.location.href = '/';
                        }, 200);
                    } else {
                        reconnectTimeout = setTimeout(connectSSE, 3000);
                    }
                })
                .catch(() => {
                    reconnectTimeout = setTimeout(connectSSE, 3000);
                });

            setLoading(false);
        };
    };

    connectSSE();

    return () => {
        if (es) es.close();
        if (reconnectTimeout) clearTimeout(reconnectTimeout);
    };
}, []);



    return (
        <div>
            <div className="w-full  ">
                <div className="p-4">
                    <h2 className="text-lg font-semibold">Select Groups</h2>
                    <p className="text-sm text-gray-500 mb-2">
                        Find and select groups to manage
                    </p>
                </div>



                {
                    loading ? (
                        <div className="space-y-4 px-4">

                            <div className="h-10 w-full bg-gray-200 rounded-full animate-pulse" />


                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center justify-between animate-pulse">
                                    <div className="flex items-center ">
                                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                                        <div className="space-y-2">
                                            <div className="h-3 w-32 bg-gray-200 rounded" />
                                            <div className="h-3 w-48 bg-gray-100 rounded" />
                                        </div>
                                    </div>
                                    <div className="w-10 h-6 rounded-full bg-gray-200" />
                                </div>

                            ))}

                        </div>
                    ) : (
                        <section>
                            <div className="px-4">
                                <input
                                    placeholder="Search for group"
                                    className="w-full bg-gray-100 rounded-full px-[24px] py-3 text-sm mb-4 outline-none"
                                />
                                <div className="space-y-4">
                                    {paginatedGroups.map((group) => (
                                        <div
                                            key={group.id}
                                            className="flex items-center justify-between gap-3"
                                        >

                                            <div className="flex items-center gap-3 min-w-0">

                                                <div className="w-10 h-10 flex-shrink-0">
                                                    {group.profilePicture ? (
                                                        <img
                                                            src={group.profilePicture}
                                                            alt={group.name}
                                                            className="w-full h-full rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700 uppercase">
                                                            {group.name?.slice(0, 2)}
                                                        </div>
                                                    )}
                                                </div>


                                                <div className="min-w-0 mt-1">
                                                    <p className="text-sm font-medium text-[#181925] truncate">
                                                        {group.name || "Unnamed group"}
                                                    </p>

                                                    <p className="text-xs text-gray-500 truncate  leading-snug line-clamp-2">
                                                        {group.description || "No description"}
                                                    </p>
                                                </div>
                                            </div>


                                            <button
                                                onClick={() => toggleGroup(group.id)}
                                                className={`w-10 h-6 flex-shrink-0 rounded-full flex items-center px-1 transition ${selected.includes(group.id) ? "bg-black" : "bg-gray-300"
                                                    }`}
                                            >
                                                <div
                                                    className={`w-4 h-4 bg-white rounded-full transition ${selected.includes(group.id)
                                                        ? "translate-x-4"
                                                        : "translate-x-0"
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>



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

                                <button
                                    disabled={groups.length === 0}
                                    onClick={() => setOpen(true)}
                                    className="bg-[#111827] text-white px-5 py-2 mt-2 mx-auto md:mt-0 md:mx-0 rounded-full text-sm font-bold"
                                >
                                    Manage groups
                                </button>
                            </div>

                            {open && (
                                <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
                                    <div className="bg-white w-full max-w-md rounded-3xl p-8">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-lg font-semibold">Confirm Group</h3>
                                                <p className="text-sm text-gray-500">Add group automation</p>
                                            </div>
                                            <button onClick={() => setOpen(false)}>✕</button>
                                        </div>

                                        <p className="text-base text-[#71717A] mt-6 pt-4 border-t border-dashed">
                                            Once you confirm these groups,{" "}
                                            <b>you cannot change them</b> - even if you log out.
                                        </p>

                                        <div className="mt-4 space-y-3">
                                            {selectedGroups.map((group) => (


                                                <div key={group.id} className="flex items-center gap-3 min-w-0">

                                                    <div className="w-10 h-10 flex-shrink-0">
                                                        {group.profilePicture ? (
                                                            <img
                                                                src={group.profilePicture}
                                                                alt={group.name}
                                                                className="w-full h-full rounded-full object-cover"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700 uppercase">
                                                                {group.name?.slice(0, 2)}
                                                            </div>
                                                        )}
                                                    </div>


                                                    <div className="min-w-0 mt-1">
                                                        <p className="text-sm font-medium truncate" title={group.name}>
                                                            {group.name || "Unnamed group"}
                                                        </p>

                                                        <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                                                            {group.description || "No description"}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex justify-between mt-6">
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="px-4 py-2 rounded-full border"
                                            >
                                                Cancel
                                            </button>

                                            <button className="px-4 py-2 rounded-full bg-black text-white">
                                                Yes, I want these groups
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>
                    )

                }

            </div>
        </div>
    );
}
