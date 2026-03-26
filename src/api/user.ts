import axios from "axios";
import toast from "react-hot-toast";

export const getUser = async () => {
  try {
    const res = await axios.get(
      "https://manajer-22u7.onrender.com/auth/get-user",
      { withCredentials: true }
    );

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        console.log("Session expired");
        toast.error("Session expired. Please login again.");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);

        return null;
      }
    }

    console.log(error);
    return null;
  }
};