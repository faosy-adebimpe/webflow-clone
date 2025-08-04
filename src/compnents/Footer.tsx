import logo from '../assets/svg/logo.svg';
import countriesData from '../data/countries.data';
import CountryCard from './CountryCard';
const Footer = () => {
    return (
        <footer
            className="bg-white pt-[71px] border-t border-gray-300"
            id="footer"
        >
            <div className="container">
                <div className="flex gap-[30px] flex-col lg:flex-row lg:justify-between lg:items-center ">
                    <div className="flex gap-[21px] flex-col items-start max-w-[450px]">
                        <img
                            src={logo}
                            title="Deliver X logo"
                            alt="Deliver X logo"
                        />
                        <p className="text-black/70 md:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut.
                        </p>
                    </div>

                    <div className="flex gap-[20px] flex-col md:flex-row md:justify-start">
                        <button className="bg-primary text-white font-bold w-full h-[66px] rounded-[14px] md:p-[20px] md:w-auto md:pl-[15px] transition hover:bg-btn-hover">
                            <span>Download for iOS</span>
                        </button>

                        <button className="btn bg-primary text-white font-bold w-full h-[66px] rounded-[14px] md:p-[20px] md:w-auto md:pl-[15px] transition hover:bg-btn-hover">
                            <span>Download for Android</span>
                        </button>
                    </div>
                </div>
                <hr className="mt-10 h-[2px] w-full text-gray-300" />
                <div className="mt-16 grid grid-cols-[auto_auto_auto] justify-start gap-x-20 md:grid-cols-[auto_1fr_1fr] lg:md:grid-cols-[auto_auto_auto_1fr] lg:gap-x-10 xl:gap-x-20">
                    <div className="flex gap-2 flex-col items-start">
                        <h3 className="font-bold text-lg mb-3 md:text-xl">
                            Menu
                        </h3>
                        <a href="#" className="footer-link">
                            Home
                        </a>
                        <a href="#" className="footer-link">
                            About
                        </a>
                        <a href="#" className="footer-link">
                            Contact
                        </a>
                        <a href="#" className="footer-link">
                            Blog
                        </a>
                        <a href="#" className="footer-link">
                            Blog posts
                        </a>

                        <div className="hidden md:flex gap-2 flex-col items-start lg:hidden">
                            <a href="#" className="footer-link">
                                Plan Single
                            </a>
                            <a href="#" className="footer-link">
                                Plans
                            </a>
                            <a href="#" className="footer-link">
                                Register
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-2 flex-col items-start pt-12 md:hidden lg:flex">
                        <a href="#" className="footer-link">
                            Contact
                        </a>
                        <a href="#" className="footer-link">
                            Blog
                        </a>
                        <a href="#" className="footer-link">
                            Blog posts
                        </a>
                    </div>

                    <div className="ml-20 flex gap-2 flex-col items-start">
                        <h3 className="font-bold text-lg mb-3 md:text-xl">
                            Utility pages
                        </h3>
                        <a href="#" className="footer-link">
                            Start here
                        </a>
                        <a href="#" className="footer-link">
                            Styleguide
                        </a>
                        <a href="#" className="footer-link">
                            Password protected
                        </a>
                        <a href="#" className="footer-link">
                            404 Not found
                        </a>
                        <a href="#" className="footer-link">
                            Licenses
                        </a>
                        <a href="#" className="footer-link">
                            Changelog
                        </a>
                        <a
                            href="#"
                            className="footer-link font-bold text-primary pb-2 border-b-[3px] border-primary hover:text-black/90 hover:border-black/90"
                        >
                            Browse More Templates
                        </a>
                    </div>
                    <div className="mt-[68px] flex gap-[24px] flex-col items-start w-full col-span-3 md:col-span-1 md:mt-0">
                        <h3 className="font-bold text-lg mb-3 md:text-xl">
                            Available in
                        </h3>
                        <div className="grid grid-cols-2 gap-y-[13px] gap-x-[29px] w-full md:grid-cols-1 lg:grid-cols-2">
                            {countriesData.map((item) => (
                                <CountryCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="mt-[80px] mb-[33px] h-[2px] w-full text-gray-300" />

                <div className="mb-[50px]">
                    <h3 className="text-black/70 text-center md:text-lg">
                        <span className="">
                            Copyright &copy; Deliver X | Designed by{' '}
                        </span>
                        <span className="text-primary">BRIX Templates </span>
                        <span className="">- Powered by </span>
                        <span className="text-primary">Webflow</span>
                    </h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
