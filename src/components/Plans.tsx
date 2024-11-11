import Button from "./Button";
import "../styles/plans.css"

export default function Plans() {
    return (
        <section id="pricing" className="container">
            <header>
                <p className="desktop-only">Planos e preços</p>
                <h2>Nossos planos de turbos</h2>
            </header>
            <section className="even-columns gap-1.5">
                <div className="pricing-card">
                    <span className="plan">
                        <h3>Básico</h3>
                        <p>Você tem direito a uma turbina básica para seu carro.</p>
                    </span><h2>R$ 999,90</h2><Button text="Comprar agora" secondary key="basic" /><span className="hr" /><span className="features">
                        <img alt="ícone check" width={24} height={24} />
                        <p>Instalação não inclusa</p>
                    </span><span className="features">
                        <img alt="ícone check" width={24} height={24} />
                        <p>Garantia de 6 meses</p>
                    </span>
                </div>
                <div className="pricing-card premium">
                    <span className="bonus"><p>OFERTA ESPECIAL</p></span><span className="plan">
                        <h3>Premium</h3>
                        <p>Para quem quer transformar seu carro em um verdadeiro avião.</p>
                    </span><span className="price">
                        <h2>R$ 2.499,90</h2>
                        <p>/unidade</p>
                    </span><Button text="Comprar agora" key="premium" /><span className="hr" /><span className="features">
                        <img alt="ícone check" width={24} height={24} />
                        <p>Instalação inclusa</p>
                    </span><span className="features">
                        <img alt="ícone check" width={24} height={24} />
                        <p>Garantia de 2 anos</p>
                    </span><span className="features">
                        <img alt="ícone check" width={24} height={24} />
                        <p>Aumento de potência garantido</p>
                    </span>
                </div>
            </section>
        </section>
    )
}