import { create } from "zustand";

interface DashboardStore {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  isConnected: false,

  setIsConnected: (isConnected: boolean) =>
    set({ isConnected }),
}));