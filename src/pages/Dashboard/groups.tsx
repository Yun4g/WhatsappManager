
import { SavedGroups } from "@/api/Groups";
import { useEffect, useState } from "react";



interface Group {
    id: number;
    user_id: number;
    group_wa_id: string;
    name: string;
    description: string | null;
    profile_picture: string | null;
    profile_picture_fetched_at: string;
    is_community: boolean;
    member_count: number;
    messaging_enabled: boolean;
    created_at: string;
    updated_at: string;
}


export default function Groups() {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    console.log(groups, 'groups view')

    const filteredGroups = groups.filter((group) =>
        group.name.toLowerCase().includes(search.toLowerCase())
    );

    const itemsPerPage = 5;
    const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
    const paginatedGroups = filteredGroups.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


    function ConvertToReadAbleDate(createdDate: string) {
        const date = new Date(createdDate);
        const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        return formatted;
    }


    useEffect(() => {
        let isMounted = true;
        const fetchGroups = async () => {
            setLoading(true);
            try {
                const res = await SavedGroups();
                if (isMounted) {
                    setGroups(res.groups);
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








    return (
        <div className="min-h-screen">
            <div>
                <h1 className="text-2xl font-bold text-[#181925] ">Groups</h1>
                <p className="text-XS font-meduim text-[#999999] mb-4">Manage your groups</p>


                <div className="bg-white rounded-2xl ">

                    <section className="px-4 pt-3 md:pt-6 ">
                        <input
                            type="text"
                            placeholder="Search for group"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full bg-gray-100 rounded-full px-4 py-3 text-[#999999] text-base font-meduim outline-none mb-6"
                        />
                    </section>


                    <div className="divide-y">
                        {loading ? (
                            <div className="space-y-4 p-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`flex flex-col animate-pulse ${i !== 0 ? 'border-t border-[#F0F0F0] pt-4' : ''} gap-4`}>
                                        <div className="flex w-full gap-[14px]">
                                            <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0" />
                                            <div className="flex-1 space-y-3 py-1">
                                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                                <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-gray-200" />
                                                <div className="h-3 bg-gray-200 rounded w-32"></div>
                                            </div>
                                            <div className="h-9 bg-gray-200 rounded-full w-24"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : filteredGroups.length === 0 ? (
                            <div className="text-center py-8 text-gray-500">No groups found.</div>
                        ) : (
                            paginatedGroups.map((group, index) => (
                                <div
                                    key={group.id}
                                    className={` flex flex-col px-4  ${index !== 0 ? 'border-t border-[#F0F0F0] py-4' : 'pb-4'} sm:items-center sm:justify-between gap-4`}
                                >



                                    <div className="flex w-full gap-[14px] ">
                                        {
                                            group.profile_picture ? (
                                                <img
                                                    src={group.profile_picture}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-[#becace] flex items-center justify-center text-xs font-semibold text-gray-700 uppercase">
                                                    {group.name?.slice(0, 2)}
                                                </div>
                                            )
                                        }


                                        <div >
                                            <h2 className="text-lg font-bold text-[#171717]">
                                                {group.name}
                                            </h2>
                                            <p className="text-sm text-[#999999] font-medium max-w-md mt-[3px]">
                                                {group.description || 'No Description'}
                                            </p>

                                        </div>
                                    </div>

                                    <section className="flex justify-between w-full  mt-[24px]">
                                        <div className="flex items-center gap-2 mt-2 text-xs text-[#999999] font-medium">
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8.89268 10.5669L8.97252 10.2405C8.93119 10.2599 8.86456 10.2821 8.77319 10.3073C8.68157 10.3326 8.59912 10.3454 8.52665 10.3454C8.37229 10.3454 8.26362 10.3201 8.20052 10.2693C8.13789 10.2184 8.10665 10.1227 8.10665 9.98262C8.10665 9.9271 8.11607 9.84434 8.13579 9.73602C8.15489 9.62699 8.17686 9.53009 8.20129 9.44533L8.49935 8.39007C8.52855 8.29323 8.54857 8.18675 8.55933 8.07055C8.57034 7.9546 8.57546 7.87348 8.57546 7.82744C8.57546 7.60491 8.49746 7.42433 8.34141 7.28503C8.18536 7.14583 7.96315 7.07623 7.67517 7.07623C7.51492 7.07623 7.34551 7.10471 7.16621 7.1616C6.98691 7.21835 6.79946 7.28672 6.60337 7.36656L6.52332 7.6932C6.58175 7.67159 6.65135 7.64834 6.73278 7.62427C6.81386 7.6003 6.89339 7.58791 6.97078 7.58791C7.12877 7.58791 7.23519 7.61485 7.29096 7.6679C7.34674 7.72112 7.37475 7.81576 7.37475 7.95107C7.37475 8.02589 7.36589 8.10901 7.3475 8.19935C7.32937 8.29025 7.30674 8.38638 7.28011 8.48784L6.98076 9.54735C6.95413 9.65869 6.93467 9.7583 6.92243 9.84675C6.91029 9.93509 6.90445 10.0218 6.90445 10.1061C6.90445 10.3239 6.98491 10.5034 7.14577 10.645C7.30664 10.7861 7.53218 10.8571 7.82215 10.8571C8.01098 10.8571 8.17671 10.8325 8.31934 10.7828C8.46181 10.7334 8.65315 10.6614 8.89268 10.5669ZM8.83957 6.28016C8.97882 6.15105 9.04811 5.99403 9.04811 5.81017C9.04811 5.62673 8.97892 5.4694 8.83957 5.33865C8.70068 5.20826 8.53326 5.14286 8.33752 5.14286C8.14116 5.14286 7.97308 5.2081 7.83286 5.33865C7.69263 5.4694 7.62237 5.62667 7.62237 5.81017C7.62237 5.99403 7.69263 6.151 7.83286 6.28016C7.97334 6.40973 8.14111 6.47457 8.33752 6.47457C8.53331 6.47457 8.70068 6.40973 8.83957 6.28016Z" fill="#999999" />
                                                </svg>

                                            </span>
                                            <span>Group created on {ConvertToReadAbleDate(group.created_at)}</span>
                                        </div>

                                        <div className="flex justify-end">
                                            <button className="px-[10px] py-3 rounded-full font-bold text-[#181925] text-xs border transition">
                                                View Group
                                            </button>
                                        </div>
                                    </section>


                                </div>
                            ))
                        )
                        }
                    </div>



                </div>


                {!loading && totalPages > 0 && (
                    <div className="flex items-center justify-start gap-2 mt-[16px]">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`text-gray-400 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.204 15.9991L18.9165 19.7116L17.856 20.7721L13.083 15.9991L17.856 11.2261L18.9165 12.2866L15.204 15.9991Z" fill="#999999" />
                        </svg>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {

                        if (
                            pageNumber === 1 ||
                            pageNumber === totalPages ||
                            (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                        ) {
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`w-8 h-8 rounded-lg text-sm ${pageNumber === currentPage
                                            ? "bg-gray-200 text-gray-800"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        } else if (
                            (pageNumber === currentPage - 2 && currentPage > 3) ||
                            (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                        ) {

                            if (pageNumber === 1 || pageNumber === totalPages) return null;
                            return <span key={pageNumber} className="text-gray-400 px-1">...</span>;
                        }
                        return null;
                    })}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`text-gray-400 ${currentPage === totalPages || totalPages === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7955 15.9991L13.083 12.2866L14.1435 11.2261L18.9165 15.9991L14.1435 20.7721L13.083 19.7116L16.7955 15.9991Z" fill="#999999" />
                        </svg>

                    </button>
                </div>
                )}
            </div>
        </div>
    );
}