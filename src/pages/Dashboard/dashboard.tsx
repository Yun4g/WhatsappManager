import { ConnectToWhatsappQrCode } from "@/api/dashboard";
import GroupManager from "@/Component/GroupsUi";
import NoGroupsCard from "@/Component/NoGroupUi";

import PhonePairingUi from "@/Component/phoneConnectUi";
import QrcodeUi from "@/Component/QrcodeUi";

import { useUserStore } from "@/store/userData";
import { useEffect, useState } from "react";



function Dashboard() {
    const user = useUserStore((state) => state.user);
   

    const getQrCode = ConnectToWhatsappQrCode;
    const [connectMethod, setConnectMethod] = useState<'qr' | 'phone'>('qr');


    useEffect(() => {
        const fetchQr = async () => {
            if (!user?.connected) return;
            await getQrCode(user.id);
        };

        fetchQr();
    }, []);


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
                             setConnectMethodPhone={()=> setConnectMethod('phone')}
                                />
                        ) : (
                            <PhonePairingUi  
                            setConnectMethodPhone={()=>  setConnectMethod('qr')}
                            />
                        )
                    }
                </section>

            <section className="w-full h-fit bg-white rounded-3xl  mt-[16px] mb-[300px]">
                {user?.connected ? (
                    <GroupManager/>
                  
                ) : (
                    <NoGroupsCard />
                )}
            </section>


        </section>
    );
}

export default Dashboard;