import { Group } from "@/Component/GroupsUi";
import axios from "axios";



export const GetGroups = async () => {
     try {
         const res = await axios.get('https://manajer-22u7.onrender.com/data/whatsapp/groups', {
             withCredentials: true,
         });
         return res.data;
     } catch (error) {
        console.log(error);
     }
}

export const SelectGroups = async (group: Group[]) => {
     try {
         const res = await axios.post('https://manajer-22u7.onrender.com/data/whatsapp/store-groups', 
             { group },
            
            {
             withCredentials: true,
         });
         return res.data;
     } catch (error) {
        console.log(error);
     }
}

