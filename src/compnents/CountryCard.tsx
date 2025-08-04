import type { CountryCardType } from '../type';

const CountryCard = ({ image, title }: CountryCardType) => {
    return (
        <div className="flex gap-[18px] items-center">
            <img
                src={image}
                title={title}
                alt={title}
                className="rounded-[10px] size-[60px] md:size-[78px] md:rounded-[24px]"
            />
            <h3 className="font-bold text-lg leading-[23.994px]">{title}</h3>
        </div>
    );
};

export default CountryCard;
