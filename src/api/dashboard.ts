
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";



export const ConnectToWhatsappQrCode = async (userId: string)=> {
     try {
        const res = await axios.get(`https://manajer-22u7.onrender.com/data/whatsapp/connect?userId=${userId}&type=qr`, 
             {withCredentials: true}
    )
        return res.data;
   
     } catch (error) {
        console.log(error); 
     
     }
}

export const ConnectToWhatsappPhoneNumber = async ( userId: string, phoneNumber: string)=> {
     try {
        const res = await axios.get(`https://manajer-22u7.onrender.com/data/whatsapp/connect?userId=${userId}&type=phone&phoneNumber=${phoneNumber}`, 
             {withCredentials: true}
    )
        return res.data;
   
     } catch (error) {
        console.log(error); 
     
     }
}


export const  Payments = async () => {
  try {
    const paymentPromise = axios.get(
      "https://manajer-22u7.onrender.com/payment/subscription",
      { withCredentials: true }
    );

    const res = await toast.promise(paymentPromise, {
      loading: "Checking payment status...",
      success: "Payment status loaded!",
      error: (err: unknown) => {
        let message = "Failed to load payment status.";
        if (axios.isAxiosError(err)) {
          const axiosError = err as AxiosError;
          if (axiosError.response?.data && typeof axiosError.response.data === "object") {
            const data = axiosError.response.data as { message?: string };
            if (data.message) message = data.message;
          } else if (typeof axiosError.response?.data === 'string') {
            message = axiosError.response.data;
          }
        }
        return message;
      },
    });

    return res.data; // Return the data from the successful response
  } catch (error: unknown) {
    console.error("Error in Payments function:", error); // Log the error for debugging
    return null;
  }
};