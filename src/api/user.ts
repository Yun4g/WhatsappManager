import axios from "axios";

export const getUser = async () => {
  try {
    const res = await axios.get('https://manajer-22u7.onrender.com/auth/get-user', {
      withCredentials: true,
    });


    return res.data; 
  } catch (error) {
     if (axios.isAxiosError(error) && error.response?.status === 401) {
      // window.location.href = '/';
      return null;
    }
    console.log(error);
    return null; 
  }
};