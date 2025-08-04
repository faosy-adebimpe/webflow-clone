import { useGSAP } from '@gsap/react';
import Footer from './compnents/Footer';
import Navbar from './compnents/Navbar';
import AboutPage from './pages/About.page';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useGSAP(() => {
        // fade in
        const fadeInElements = gsap.utils.toArray<HTMLElement>('.fade-in');
        fadeInElements.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        // slide up
        const slideUpElements = gsap.utils.toArray<HTMLElement>('.slide-up');
        slideUpElements.forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 100,
                duration: 0.3,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        // pin
        let trigger: ScrollTrigger;

        const createPin = () => {
            if (window.innerWidth >= 1024) {
                trigger = ScrollTrigger.create({
                    trigger: '.pin-wrapper',
                    start: 'top 20%',
                    endTrigger: '.last-element',
                    end: 'bottom 10%',
                    pin: '.pinned-element',
                    pinSpacing: false,
                });
            }
        };

        createPin();

        const handleResize = () => {
            if (trigger) trigger.kill();
            createPin();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (trigger) trigger.kill();
        };
    }, []);
    return (
        <>
            <Navbar />
            <AboutPage />
            <Footer />
        </>
    );
}

export default App;
