import { GetGroups } from "@/api/Groups";
import React, { useEffect, useState } from "react";

interface Group {
    id: number;
    name: string;
    info: string;
    avatar: string;
}

const mockGroups: Group[] = [
    { id: 1, name: "Techalab", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Kingdom Hall", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Adullam", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "Patreon Club", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=4" },
    { id: 5, name: "Schedio", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=5" },
    { id: 6, name: "Techalab", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 7, name: "Kingdom Hall", info: "Group Info", avatar: "/placeholderManjaer.jpg" },
    { id: 9, name: "Adullam", info: "Group Info", avatar: "/qrCode.png" },
    { id: 10, name: "Patreon Club", info: "Group Info", avatar: "/sign up bg image.png" },
    { id: 11, name: "Schedio", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=5" },
    { id: 12, name: "Techalab", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 13, name: "Kingdom Hall", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 14, name: "Adullam", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 15, name: "Patreon Club", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=4" },
    { id: 15, name: "Schedio", info: "Group Info", avatar: "https://i.pravatar.cc/40?img=5" },
];

export default function GroupManager() {
    const [selected, setSelected] = useState<number[]>([]);
    const [open, setOpen] = useState(false);
    const [groups, setGroups] = useState([]);
    console.log(groups)
    const getGroup = GetGroups

    const toggleGroup = (id: number) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(mockGroups.length / itemsPerPage);

    const paginatedGroups = mockGroups.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const selectedGroups = mockGroups.filter((g) => selected.includes(g.id));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getGroup();
                console.log(res, 'group response')
                setGroups(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [getGroup]);



    return (
        <div>
            <div className="w-full  p-4">
                <h2 className="text-lg font-semibold">Select Groups</h2>
                <p className="text-sm text-gray-500 mb-4">
                    Find and select groups to manage
                </p>

                <input
                    placeholder="Search for group"
                    className="w-full bg-gray-100 rounded-full px-4 py-3 text-sm mb-4 outline-none"
                />

                <div className="space-y-4">
                    {paginatedGroups.map((group) => (
                        <div key={group.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img src={group.avatar} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-sm font-medium">{group.name}</p>
                                    <p className="text-xs text-gray-500">{group.info}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => toggleGroup(group.id)}
                                className={`w-10 h-6 rounded-full flex items-center px-1 transition ${selected.includes(group.id)
                                    ? "bg-black"
                                    : "bg-gray-300"
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
            <div className="flex items-center justify-between mt-6 border-t p-[15px]">

                <div className="flex items-center gap-2">


                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-lg  text-gray-500 disabled:opacity-40"
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
                                className={`w-8 h-8 p-[4px] rounded-lg text-sm flex text-[#999999] items-center justify-center transition
                                 ${currentPage === page
                                        ? "bg-[#F9F9F9] font-semibold"
                                        : "border "
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
                        className="w-8 h-8 flex items-center justify-center rounded-lg  text-gray-500 disabled:opacity-40"
                    >
                        ›
                    </button>
                </div>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-[#111827] text-white px-5 py-2 rounded-full text-sm font-bold"
                >
                    Manage groups
                </button>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl p-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold">Confirm Group</h3>
                                <p className="text-sm text-gray-500">Add group automation</p>
                            </div>
                            <button onClick={() => setOpen(false)}>✕</button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            Once you confirm these groups, you cannot change them. Please
                            confirm these are the groups you want to manage.
                        </p>

                        <div className="mt-4 space-y-3">
                            {selectedGroups.map((group) => (
                                <div key={group.id} className="flex items-center gap-3">
                                    <img src={group.avatar} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="text-sm font-medium">{group.name}</p>
                                        <p className="text-xs text-gray-500">{group.info}</p>
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
        </div>
    );
}
