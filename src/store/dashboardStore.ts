import { create } from "zustand";


interface UserDataType {
  userId: string
}
interface DashboardStore {
  isConnected: boolean;
  userData: UserDataType[];
  setIsConnected: (isConnected: boolean) => void;
  setUserData: (userData: UserDataType[]) => void; 
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  isConnected: false,
  userData: [],
  setUserData: (userData: UserDataType[]) =>
    set({ userData }),

  setIsConnected: (isConnected: boolean) =>
    set({ isConnected }),
}));