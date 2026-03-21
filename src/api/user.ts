import axios from "axios";

export const getUser = async () => {
  try {
    const res = await axios.get('https://manajer-22u7.onrender.com/auth/get-user', {
      withCredentials: true,
    });
    return res.data; 
  } catch (error) {
    console.log(error);
    return null; 
  }
};