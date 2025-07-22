import { createContext } from "react";

type Value = {
    cardSelect: null | string,
    setCardSelected: React.Dispatch<React.SetStateAction<null | string>>
}

const CardListContext = createContext({} as Value);

export default CardListContext;