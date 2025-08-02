import classNames from 'classnames';
import { useModalStore } from '../store/modalStore';

const Sidebar = () => {
    const { sidebarOpened } = useModalStore();
    return (
        <section
            className={classNames(
                'pt-[15vh] w-full h-screen bg-white fixed left-0 top-0 transition-transform duration-300',
                { '-translate-y-[100vh]': !sidebarOpened }
            )}
            id="sidebar"
        >
            <div className="container w-full h-full flex flex-col justify-between">
                <div className="flex gap-7 flex-col items-start mt-5">
                    <a href="#" className="link">
                        Home
                    </a>
                    <a href="#" className="link">
                        About
                    </a>
                    <a href="#" className="link">
                        Pricing
                    </a>
                    <a href="#" className="link">
                        Pages
                    </a>
                </div>

                <div className="w-full">
                    <button className="text-white font-medium bg-primary w-full py-5 rounded-xl text-lg">
                        Get started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
