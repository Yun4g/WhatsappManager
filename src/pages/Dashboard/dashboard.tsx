
// import { getUser } from "@/api/user";
import GroupManager from "@/Component/GroupsUi";
import NoGroupsCard from "@/Component/NoGroupUi";

import PhonePairingUi from "@/Component/phoneConnectUi";
import QrcodeUi from "@/Component/QrcodeUi";

import { useUserStore } from "@/store/userData";
import {  useState } from "react";




function Dashboard() {
    const user = useUserStore((state) => state.user);
    // const setUser = useUserStore((state) => state.setUserData);
   
    // const getUserData = useCallback(async () => {
    //     const userData = await getUser();
    //     if (userData) {
    //         setUser(userData);
    //     }
    // }, [setUser]);

    const [connectMethod, setConnectMethod] = useState<'qr' | 'phone'>('qr');
     console.log(connectMethod, 'connectMethod');

      const activeMethod = user?.connected ? 'qr' : connectMethod;



    return (
        <section className="" >

            <section>
                {
                    activeMethod === 'qr' ? (
                        <>
                            <h1 className="text-[#181925] text-2xl font-bold">
                                Overview
                            </h1>

                            <p className="text-[#999999] text-[12px] font-medium">Hi, welcome to Manajer</p>

                            <QrcodeUi
                                isConnected={user?.connected ?? false}
                                
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