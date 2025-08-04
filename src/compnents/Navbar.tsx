// import logo from '../assets/images/logo.png';
import logo from '../assets/svg/logo.svg';
import classNames from 'classnames';
import Sidebar from './Sidebar';
import { useModalStore } from '../store/modalStore';
import { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Navbar = () => {
    const { sidebarOpened, setSideBarOpened } = useModalStore();
    const [show, setShow] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useGSAP(() => {
        gsap.from('#nav', {
            y: 200,
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                gsap.set('#nav', { clearProps: 'all' });
            },
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScroll) < 10) return;

            if (scrollY > lastScroll) {
                setShow(true);
            } else {
                setShow(false);
            }

            setLastScroll(scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScroll, show]);

    return (
        <>
            <Sidebar />
            <nav
                className={classNames(
                    'bg-white shadow-xl shadow-black/5 h-[92px] md:h-[104px] lg:h-[120px] w-full fixed left-0 top-0 z-10 transition-transform duration-300',
                    { '-translate-y-full': show }
                )}
                id="nav"
            >
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <img
                            src={logo}
                            title="Deliver X logo"
                            alt="Deliver X logo"
                            id="logo"
                        />
                        {/* <h1 className="text-2xl font-bold">Deliver X</h1> */}
                    </div>

                    <div className="flex items-center ml-auto">
                        <div className="hidden lg:flex gap-[26px] items-center">
                            <a
                                href="#"
                                className="text-lg transition hover:text-primary font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-lg transition hover:text-primary font-medium"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="text-lg transition hover:text-primary font-medium"
                            >
                                Pricing
                            </a>
                            <a
                                href="#"
                                className="text-lg transition hover:text-primary font-medium flex items-center gap-1"
                            >
                                <span>Pages</span>
                                <ChevronDownIcon className="size-4" />
                            </a>
                            <a
                                href="#"
                                className="text-lg transition hover:text-primary font-medium"
                            >
                                Cart(0)
                            </a>
                        </div>
                        <h2 className="text-lg font-medium mr-9 md:mr-0 lg:hidden">
                            Cart(0)
                        </h2>

                        <button className="ml-[32px] mr-[18px] font-bold bg-white rounded-[12px] text-lg w-[163px] h-[56px] border border-[#ededed] transition hover:bg-primary hover:text-white hidden md:block">
                            Download app
                        </button>

                        <button className="font-bold rounded-[12px] text-lg w-[115px] h-[56px] bg-primary text-white mr-[25px] hidden md:block lg:mr-0 transition hover:bg-btn-hover">
                            Register
                        </button>

                        <button
                            className={classNames(
                                'w-[30px] h-[38px] relative flex lg:hidden',
                                {
                                    'justify-center items-center h-[30px] mt-0.5':
                                        sidebarOpened,
                                    'gap-2.5 flex-col justify-center items-end':
                                        !sidebarOpened,
                                }
                            )}
                            onClick={setSideBarOpened}
                        >
                            <div
                                className={classNames(
                                    'w-[30px] h-[4px] bg-black rounded-full transition-all duration-300 absolute origin-bottom',
                                    {
                                        'rotate-135 mb-2': sidebarOpened,
                                        ' mb-4': !sidebarOpened,
                                    }
                                )}
                            ></div>
                            <div
                                className={classNames(
                                    'h-[4px] bg-black rounded-full transition-all duration-300 absolute',
                                    {
                                        'w-[30px] rotate-45 mt-0':
                                            sidebarOpened,
                                        'w-[20px] mt-3': !sidebarOpened,
                                    }
                                )}
                            ></div>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
