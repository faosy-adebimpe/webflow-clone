import type { Counter } from '../type';

const CounterCard = ({ amount, symbol, title }: Counter) => {
    return (
        <div className="text-center flex gap-[6px] flex-col items-center">
            <h2 className="text-[40px] font-bold lg:text-[56px]">
                {amount}
                <span className="text-primary">{symbol}</span>
            </h2>
            <p className="font-medium text-black/70 lg:text-xl">{title}</p>
        </div>
    );
};

export default CounterCard;
