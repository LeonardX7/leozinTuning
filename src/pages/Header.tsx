import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import { useMobileMenu } from "../Context/ContextMobileMenu";

export default function Header() {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenu();

    return (
        <header className="container py-sm">
            <nav className="flex items-center justify-between">
                <img src={Logo} alt="Logo da empresa" width={220} height={80} />
                <div className="desktop-only">
                    <ul className="flex gap-1">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#product">Produtos</a>
                        </li>
                        <li>
                            <a href="#testimonials">Depoimentos</a>
                        </li>
                        <li>
                            <a href="#pricing">Preços</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
                <div className="desktop-only">
                    <div className="flex items-center">
                        <a className="reverse-color ml-lg" href="#">Login</a>
                        <Button text="Cadastre-se" />
                    </div>
                </div>
                <div className="mobile-menu">
                    {showMobileMenu ? (
                        <div className="mobile-menu-content">
                            <div className="container flex">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#product">Produtos</a>
                                    </li>
                                    <li>
                                        <a href="#testimonials">Depoimentos</a>
                                    </li>
                                    <li>
                                        <a href="#pricing">Preços</a>
                                    </li>
                                    <li>
                                        <a href="#contact">Contato</a>
                                    </li>
                                    <li>
                                        <a className="reverse-color" href="#">Login</a>
                                    </li>
                                </ul>
                                <button onClick={() => setShowMobileMenu(false)} className="btn-wrapper" aria-label="Fechar menu">
                                    <img src={Close} alt="Ícone fechar menu" width={24} height={24} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => setShowMobileMenu(true)} className="btn-wrapper" aria-label="Abrir menu">
                            <img src={Menu} alt="Ícone menu" width={24} height={24} />
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
}