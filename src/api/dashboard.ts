import axios from "axios";


export const ConnectToWhatsappQrCode = async ()=> {
     try {
        const res = await axios.post('https://manajer-22u7.onrender.com/whatsapp/connect', 
             { type: 'qr', },
             {withCredentials: true}
    )
        return res.data;
   
     } catch (error) {
        console.log(error); 
     
     }
}

export const ConnectToWhatsappPhoneNumber = async (phoneNumber: string)=> {
     try {
        const res = await axios.post('https://manajer-22u7.onrender.com/whatsapp/connect', 
             { 
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