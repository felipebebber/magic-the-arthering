import { create } from 'zustand';
import CardType from '../types/Card';


type CardPageStoreType = {
    card: null | CardType,
    setCard: (card: CardType | null) => void;
}

const useCardPageStore = create<CardPageStoreType>((set) => ({
    card: null,
    setCard: (card) => set(() => ({ card: card })),
}));

export default useCardPageStore;