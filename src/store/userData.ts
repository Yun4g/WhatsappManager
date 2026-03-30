import { create } from "zustand";

interface UserDataType {
  id: string;
  email: string;
  name: string;
  wa_number: string;
   wa_profile_name: string;
  profile_pic: string;
  connected: boolean;
   stored_groups: boolean;
}

interface UserStore {
  user: UserDataType | null;
  setUserData: (user: UserDataType) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUserData: (user) => set({ user }),
}));