// import { ConnectToWhatsappQrCode } from "@/api/dashboard";
import { getUser } from "@/api/user";
import GroupManager from "@/Component/GroupsUi";
import NoGroupsCard from "@/Component/NoGroupUi";

import PhonePairingUi from "@/Component/phoneConnectUi";
import QrcodeUi from "@/Component/QrcodeUi";

import { useUserStore } from "@/store/userData";
import { useEffect, useState } from "react";
import { useCallback } from "react";



function Dashboard() {
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUserData);
    const getUserData = useCallback(async () => {
        const userData = await getUser();
        if (userData) {
            setUser(userData);
        }
    }, [setUser]);

    const [connectMethod, setConnectMethod] = useState<'qr' | 'phone'>('qr');
     console.log(connectMethod, 'connectMethod');





  
useEffect(() => {
  if (!user?.id || user.connected) return;

  let es: EventSource | null = null;
  let isMounted = true;

  const connect = () => {
    if (!isMounted) return;

    es = new EventSource(
      `https://manajer-22u7.onrender.com/data/whatsapp/connect?userId=${user.id}&type=qr`
    );

    es.addEventListener("connected", async (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data) {
          await getUser(); 
        }
         console.log("qr code")
      } catch (err) {
        console.error("Failed to parse SSE:", err);
      }
    });

    es.onerror = () => {
      console.log("SSE error... reconnecting");
      es?.close();

      if (isMounted) {
        setTimeout(connect, 3000); 
      }
    };
  };

  connect();

  return () => {
    isMounted = false;
    es?.close();
  };
}, []);




    return (
        <section className="" >

            <section>
                {
                    connectMethod === 'qr' ? (
                        <>
                            <h1 className="text-[#181925] text-2xl font-bold">
                                Overview
                            </h1>

                            <p className="text-[#999999] text-[12px] font-medium">Hi, welcome to Manajer</p>

                            <QrcodeUi
                                isConnected={user?.connected ?? false}
                                getUserData={getUserData}
                                setConnectMethodPhone={() => setConnectMethod('phone')}
                            />
                        </>
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