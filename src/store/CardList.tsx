import { create } from "zustand";

type CardListStoreType = {
    key: number,
    setKey: () => void;
}


const useCardListStore = create<CardListStoreType>((set) => ({
    key: 1,
    setKey: () => set((state) => ({ key: state.key + 1 })),
}))

export default useCardListStore;