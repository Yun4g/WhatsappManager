import { create } from "zustand";

interface UserDataType {
  id: string;
  email: string;
  name: string;
  profile_pic: string;
  connected: boolean;
}

interface UserStore {
  user: UserDataType | null;
  setUserData: (user: UserDataType) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUserData: (user) => set({ user }),
}));