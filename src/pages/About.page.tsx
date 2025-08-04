import Card2 from '../compnents/Card2';
import Card3 from '../compnents/Card3';
import Card5 from '../compnents/Card5';
import Card7 from '../compnents/Card7';
import Hero from '../compnents/Hero';
import {
    aboutUs,
    companyData,
    experienceData,
    ourMission,
    partnerData,
} from '../data/others.data';

const AboutPage = () => {
    return (
        // <div className="" id="about">
        // h-[92px] md:h-[104px] lg:h-[120px]
        <div className="mt-[92px] md:mt-[104px] lg:mt-[120px]" id="about">
            <Hero />

            {/* About Us */}
            <div className="mt-20">
                <div className="container flex gap-16 flex-col md:max-w-[680px] lg:max-w-[1440px]">
                    <Card2 {...aboutUs} reverse={true} />
                    <Card2 {...ourMission} />
                </div>
            </div>

            {/* Our Journey */}

            <div className="bg-secondary mt-[116px] py-[116px]">
                <div className="container max-w-[680px] lg:grid lg:grid-cols-2 lg:max-w-[1440px] xl:gap-[114px] pin-wrapper">
                    <div className=" flex gap-3 flex-col items-start pinned-element">
                        <h2 className="text-lg uppercase tracking-[0.96px] text-primary font-bold">
                            OUR JOURNEY
                        </h2>
                        <h3 className="text-[32px] font-bold leading-[39.264px]">
                            It has been a long but incredible journey
                        </h3>
                        <p className="text-black/70 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit tortor eu egestas morbi sem vulputate etiam
                            facilisis pellentesque ut quis.
                        </p>
                        <button className="bg-primary text-white transition font-bold rounded-[13px] w-[176px] h-[72px] hover:bg-btn-hover mt-7">
                            Download app
                        </button>
                    </div>

                    {/* experience */}
                    <div className="mt-[53px] flex gap-[40px] flex-col lg:mt-0">
                        {experienceData.map((item) => (
                            <Card3 key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Our partners */}
            <div className="py-[116px] bg-white">
                <div className="container">
                    <div className="flex gap-[12px] flex-col items-center text-center md:max-w-[700px] mx-auto">
                        <h2 className="font-bold text-primary uppercase md:text-lg">
                            OUR PARTNERS
                        </h2>
                        <h3 className="font-bold text-[32px] leading-[39.264px] md:text-[38px] lg:text-[44px]">
                            We don&apos;t walk alone, Deliver X works thanks to
                            our partners
                        </h3>
                        <p className="text-black/70 md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit tortor eu egestas morbi sem vulputate etiam
                            facilisis pellentesque ut quis.
                        </p>
                    </div>

                    <div className="flex gap-[40px] flex-col items-center mt-[83px] lg:grid lg:grid-cols-3">
                        {partnerData.map((item) => (
                            <Card5 key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* press & news */}
            <div className="bg-secondary py-[116px]">
                <div className="container flex gap-[48px] flex-col items-center md:max-w-[700px] lg:max-w-full">
                    <div className="flex gap-[12px] flex-col items-center text-center lg:max-w-[620px]">
                        <h2 className="font-bold tracking-[0.96px] leading-[17.776px] uppercase text-primary md:text-lg">
                            Press & News
                        </h2>
                        <h3 className="font-bold text-[32px] leading-[39.264px] md:text-[38px] xl:text-[44px] xl:leading-[53.988px]">
                            See what the press says about Deliver X
                        </h3>
                    </div>

                    <div className="flex flex-col gap-[33px] lg:grid lg:grid-cols-2 xl:max-w-[1222px]">
                        {companyData.map((item) => (
                            <Card7 key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
