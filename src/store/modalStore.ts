import { create } from 'zustand';
import type { ModalStore } from '../type';

export const useModalStore = create<ModalStore>((set, get) => ({
    sidebarOpened: false,
    setSideBarOpened: () => {
        const { sidebarOpened } = get();
        set({ sidebarOpened: !sidebarOpened });
    },
}));
