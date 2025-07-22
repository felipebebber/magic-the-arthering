import useCardListStore from "../../store/CardList";
import CardList from "../CardList";

function CardListWrapper({ currentFilter }: { currentFilter: string }) {
    const config = { sizes: { container: 'h-[355px]', card: 'w-[244px] h-[340px]' }, amount: 4 };
    const key = useCardListStore((state) => state.key);
    console.log(key);

    return (
        <>
            <CardList key={`cardlist_'random'_${key}`} visibility={currentFilter === 'random'} filter="random" {...config} />
            <CardList key={`cardlist_'red'_${key}`} visibility={currentFilter === 'red'} filter="red" {...config} />
            <CardList key={`cardlist_'green'_${key}`} visibility={currentFilter === 'green'} filter="green" {...config} />
            <CardList key={`cardlist_'blue'_${key}`} visibility={currentFilter === 'blue'} filter="blue" {...config} />
            <CardList key={`cardlist_'black'_${key}`} visibility={currentFilter === 'black'} filter="black" {...config} />
            <CardList key={`cardlist_'white'_${key}`} visibility={currentFilter === 'white'} filter="white" {...config} />
            <CardList key={`cardlist_'multicolored'_${key}`} visibility={currentFilter === 'multicolored'} filter="multicolored" {...config} />
            <CardList key={`cardlist_'colorless'_${key}`} visibility={currentFilter === 'colorless'} filter="colorless" {...config} />
            <CardList key={`cardlist_'land'_${key}`} visibility={currentFilter === 'land'} filter="land" {...config} />
        </>
    )
}

export default CardListWrapper;