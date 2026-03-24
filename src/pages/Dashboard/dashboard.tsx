import { ConnectToWhatsappQrCode } from "@/api/dashboard";
import { getUser } from "@/api/user";
import GroupManager from "@/Component/GroupsUi";
import NoGroupsCard from "@/Component/NoGroupUi";

import PhonePairingUi from "@/Component/phoneConnectUi";
import QrcodeUi from "@/Component/QrcodeUi";

import { useUserStore } from "@/store/userData";
import { useEffect, useState } from "react";



function Dashboard() {
    const user = useUserStore((state) => state.user);
    const getUserData = getUser;
    const getQrCode = ConnectToWhatsappQrCode;
    const [connectMethod, setConnectMethod] = useState<'qr' | 'phone'>('qr');
    const [loading, setLoading] = useState<boolean>(false)


    useEffect(() => {
        const fetchQr = async () => {
            if (!user?.connected) return;
            await getQrCode(user.id);
        };

        fetchQr();
    }, []);



    useEffect(() => {
        let es: EventSource;

        const connect = () => {
            es = new EventSource(`https://manajer-22u7.onrender.com/data/whatsapp/connect?userId=${user?.id}?type=qr`);

            es.addEventListener('connected', async (e) => {
                try {
                    setLoading(true)
                    const data = JSON.parse(e.data);

                    if (data) {
                        await getUserData();
                    }
                } catch (err) {
                    console.error('Parse error:', err);
                } finally{
                    setLoading(false)
                }
            });

            es.onerror = () => {
                console.log('SSE error... reconnecting');

                es.close();

           
                setTimeout(() => {
                    connect();
                }, 3000);
            };
        };

        connect();

        return () => {
            es?.close(); 
        };
    }, []);

  
    
  


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
        <section className="" >
            <h1 className="text-[#181925] text-2xl font-bold">
                Overview
            </h1>

            <p className="text-[#999999] text-[12px] font-medium">Hi, welcome to Manajer</p>



            <section>
                {
                    connectMethod === 'qr' ? (
                        <QrcodeUi
                            isConnected={user?.connected ?? false}
                            getUserData={getUserData}
                            setConnectMethodPhone={() => setConnectMethod('phone')}
                        />
                    ) : (
                        <PhonePairingUi
                            setConnectMethodPhone={() => setConnectMethod('qr')}
                        />
                    )
                }
            </section>

            <section className="w-full h-fit bg-white rounded-3xl  mt-[16px] mb-[300px]">
                {user?.connected ? (
                    <GroupManager />
                ) : (
                    <NoGroupsCard />
                )}
            </section>


        </section>
    );
}

export default Dashboard;