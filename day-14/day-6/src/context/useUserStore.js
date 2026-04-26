//STORE OUR STATES
//zustand is state management libray
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  login: () => set({ user: { name: "Osini liyanage", email: "osini@gmail.com" } }),
  logout: () => set({ user: null }),
}));
