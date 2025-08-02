import { useState } from 'react';
import logo from '../assets/images/logo.png';
import classNames from 'classnames';
const Navbar = () => {
    const [sidebarOpened, setSideBarOpened] = useState(false);
    return (
        <nav className="bg-white shadow-md shadow-black/10 p-3" id="nav">
            <div className="container flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <img src={logo} title="logo" alt="logo" />
                    <h1 className="text-2xl font-bold">Deliver X</h1>
                </div>

                <h2 className="text-lg font-medium ml-auto mr-9">Cart(0)</h2>

                <button
                    className={classNames('w-[30px] h-[38px] relative flex', {
                        'justify-center items-center h-[30px]': sidebarOpened,
                        'gap-2.5 flex-col justify-center items-end':
                            !sidebarOpened,
                    })}
                    onClick={() => setSideBarOpened((prev) => !prev)}
                >
                    <div
                        className={classNames(
                            'w-[30px] h-[4px] bg-black rounded-full transition-all duration-300 absolute origin-bottom',
                            {
                                'rotate-134 m-0 mt-0.5': sidebarOpened,
                                ' mb-3': !sidebarOpened,
                            }
                        )}
                    ></div>
                    <div
                        className={classNames(
                            'h-[4px] bg-black rounded-full transition-all duration-300 absolute',
                            {
                                'w-[30px] rotate-40 mt-2': sidebarOpened,
                                'w-[20px] mt-3': !sidebarOpened,
                            }
                        )}
                    ></div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
