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