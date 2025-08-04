import heroImage from '../assets/images/hero-image.png';
import heroImage2 from '../assets/images/hero-image-2.png';
import heroImage3 from '../assets/svg/hero-image-3.svg';
import CounterCard from './CounterCard';
import counterData from '../data/counter.data';

const Hero = () => {
    return (
        <section
            className="fade-in flex gap-10 flex-col bg-secondary"
            id="hero"
        >
            <div className="container flex gap-16 flex-col items-center">
                <div className="flex gap-16 flex-col items-center lg:flex-row">
                    <div className="flex gap-5 flex-col items-center  text-center max-w-[680px] lg:items-start lg:text-start lg:max-w-full">
                        <h2 className="text-primary font-bold uppercase tracking-wider text-[18px]">
                            ABOUT DELIVER X
                        </h2>
                        <div className="flex gap-3 flex-col items-center">
                            <h2 className="font-bold text-[43px] md:text-[52px] leading-12 lg:text-[62px] lg:leading-[71.982px]">
                                We are here to help amazing restaurants get
                                great customers
                            </h2>

                            <p className="lg:text-lg">
                                At morbi adipiscing sit sed consectetur senectus
                                Dignissim sed amet tincidunt vitae ultricies
                                ultrices amet fermentum amet neque et id sed
                                lacinia massa pretium aliquam libero et.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center max-w-[500px] lg:max-w-full">
                        <img
                            src={heroImage}
                            title="hero image"
                            alt="hero image"
                            className="max-w-md mx-auto"
                        />

                        <img
                            src={heroImage2}
                            title="hero image"
                            alt="hero image"
                            className="w-[197px] max-w-md absolute -left-5 rounded-2xl"
                        />
                        <img
                            src={heroImage3}
                            title="hero image"
                            alt="hero image"
                            className="w-[240px] max-w-md absolute bottom-10 right-0 rounded-lg shadow-md shadow-black/10"
                        />
                    </div>
                </div>

                <div className="grid gap-[40px] grid-cols-2 md:grid-cols-4 lg:w-full">
                    {counterData.map((item) => (
                        <CounterCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
