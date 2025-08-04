import classNames from 'classnames';
import type { Card3Type } from '../type';

const Card3 = ({ title, subtitle, description, last }: Card3Type) => {
    // #ededed
    return (
        <div
            className={classNames(
                'flex gap-[12px] flex-col items-start px-[50px] py-[34px] rounded-[24px] border border-[#ededed] bg-white shadow-md shadow-black/5 sm:px-[60px] sm:py-[53px] lg:px-[53px] lg:py-[60px] fade-in',
                { 'last-element': last }
            )}
        >
            <h2 className=" font-bold text-primary text-[22px] lg:text-lg">
                {title}
            </h2>
            <h3 className="text-[22px] font-bold leading-[31.174px] sm:text-[24px]">
                {subtitle}
            </h3>
            <p className="text-black/70 mt-[12px] sm:text-lg">{description}</p>
        </div>
    );
};

export default Card3;
