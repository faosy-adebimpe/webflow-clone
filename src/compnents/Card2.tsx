import classNames from 'classnames';
import type { Card2Type } from '../type';

const Card2 = ({
    title,
    subtitle,
    description,
    image,
    reverse,
}: Card2Type & { reverse?: boolean }) => {
    return (
        <div
            className={classNames(
                'flex gap-3 flex-col items-start lg:flex-row lg:items-center lg:gap-[91px]',
                { 'lg:flex-row-reverse': reverse }
            )}
        >
            <div className="flex gap-3 flex-col items-start ">
                <h2 className="text-primary font-bold text-[18px] uppercase">
                    {title}
                </h2>
                <h3 className="text-[38px] font-bold lg:text-[44px]">
                    {subtitle}
                </h3>
                <p className="text-black/70 lg:text-lg">{description}</p>
            </div>
            <img
                src={image}
                title={title}
                alt={subtitle}
                className="element mt-7 rounded-3xl shadow-lg shadow-black/10 lg:max-w-[598px] fade-in"
            />
        </div>
    );
};

export default Card2;
