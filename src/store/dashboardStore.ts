import { create } from "zustand";


interface UserDataType {
  id: string,
  email: string,
  name: string,
  profile_pic: string,
  connected: boolean
  stored_groups: boolean,
  wa_number: string | null,
  wa_profile_name: string | null
  
}
interface DashboardStore {
  userData: UserDataType[];
  setUserData: (userData: UserDataType[]) => void; 
  code: string;
  setCode: (code: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  userData: [],
  code: "",
  phone: "",
  setCode: (code: string) => set({ code }),
  setPhone: (phone: string) => set({ phone }),
  setUserData: (userData: UserDataType[]) => set({ userData }),

}));

