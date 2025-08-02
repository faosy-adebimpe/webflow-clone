import Footer from './compnents/Footer';
import Navbar from './compnents/Navbar';
import AboutPage from './pages/About.page';

function App() {
    return (
        <>
            <Navbar />
            <div className="mt-[15vh]"></div>
            <AboutPage />
            <Footer />
        </>
    );
}

export default App;
