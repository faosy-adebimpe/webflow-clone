import type { Card5Type } from '../type';

const Card5 = ({ image, title, description }: Card5Type) => {
    return (
        <div className="flex gap-[16px] flex-col items-center text-center max-w-[350px]">
            <img src={image} title={title} alt={title} className="slide-up" />
            <h2 className="mt-[16px] font-bold text-[23px] leading-[32.867px] md:text-[28px]">
                {title}
            </h2>
            <p className="text-black/70 md:text-lg">{description}</p>
        </div>
    );
};

export default Card5;
