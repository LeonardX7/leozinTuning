import "../styles/utility.css"
import Header from "./Header"
import HeroRectangleOne from "../assets/images/Rectangle 13.png";
import HeroRectangleTwo from "../assets/images/Rectangle 14.png";
import "../styles/hero.css";
import "../styles/carousel.css";
import Button from "../components/Button";
import Product from "../components/Product";
import testimonial1 from "../assets/images/testimonial1.png"
import Carousel from "../components/Carousel";
import Plans from "../components/Plans";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Opa!
                    </p>
                    <h1>Os melhores turbos pro seu carro direto na sua mão, é só comprar e seu carro vira um avião!</h1>
                    <p>Já pensou em ganhar todos os rachas que você apostar? Compre nossas turbinas e você não vai se decepcionar.</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <Product />
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Nossos clientes são os melhores!</h2>
                    </span>
                    <p>
                        Quem já comprou sabe da qualidade das nossas turbinas, estamos tirando aquela ideia de que
                        turbos são perigosos, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <div className="carousel">
                    <div className="carousel-content">
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                        <Carousel
                            image={testimonial1}
                            testimonial="véri naice"
                            name="Elon Mosca"
                            desc="Big Fan of Alexandre"
                        />
                    </div>
                </div>
            </section>
            <Plans/>
            <Contact/>
            <Footer/>
        </>
    )
}