
import axios from "axios";



export const ConnectToWhatsappQrCode = async (userId: string)=> {
     try {
        const res = await axios.post('https://manajer-22u7.onrender.com/data/whatsapp/connect', 
             {
                 userId: userId,
                 type: 'qr',
                 },
             {withCredentials: true}
    )
        return res.data;
   
     } catch (error) {
        console.log(error); 
     
     }
}

export const ConnectToWhatsappPhoneNumber = async ( userId: string, phoneNumber: string)=> {
     try {
        const res = await axios.post('https://manajer-22u7.onrender.com/data/whatsapp/connect', 
             { 
               userId: userId,
                type: "phone",
                phoneNumber: phoneNumber,
              },
             {withCredentials: true}
    )
        return res.data;
   
     } catch (error) {
        console.log(error); 
     
     }
}