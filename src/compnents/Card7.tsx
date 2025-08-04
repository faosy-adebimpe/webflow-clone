import { ArrowUpRightIcon } from 'lucide-react';
import type { Card7Type } from '../type';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const Card7 = ({ image, title, href, date }: Card7Type) => {
    const [hover, setHover] = useState(false);

    const mouseEnter = () => {
        if (hover) {
            return;
        }
        setHover(true);
    };
    const mouseLeave = () => {
        if (!hover) {
            return;
        }
        setHover(false);
    };

    useEffect(() => {
        console.log({ hover });
    }, [hover]);
    return (
        <div
            className={classNames(
                'flex gap-[26px] flex-col items-start rounded-[24px] px-[34px] py-[58px] border border-[#ededed] shadow-lg shadow-black/5 bg-white transition md:px-[53px] md:py-[68px] lg:px-[66px] lg:py-[98px]',
                { 'shadow-black/10 -translate-y-1': hover }
            )}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <img src={image} title={title} alt={title} className="" />
            <h3 className="font-bold text-[23px] leading-[32.867px] md:text-[28px]">
                {title}
            </h3>
            <div className="w-full flex gap-1 justify-between items-center mt-[3px]">
                <a
                    href={href}
                    className="flex gap-2 items-center font-bold text-primary leading-[17.776px] md:text-lg"
                >
                    <span>Read more</span>
                    <ArrowUpRightIcon
                        className={classNames('transition', {
                            'translate-x-1 -translate-y-1': hover,
                        })}
                    />
                </a>

                {/* #656565 */}
                <p className="font-medium text-black/70 text-lg md:text-xl">
                    {date}
                </p>
            </div>
        </div>
    );
};

export default Card7;
