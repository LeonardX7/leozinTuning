import "../styles/utility.css"
import Header from "./Header"
import HeroRectangleOne from "../assets/images/Rectangle 13.png";
import HeroRectangleTwo from "../assets/images/Rectangle 14.png";
import "../styles/hero.css";
import Button from "../components/Button";
import Product from "../components/Product";


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
        </>
    )
}