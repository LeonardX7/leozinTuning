import "../styles/product.css";
import Turbo from "../assets/turbo.svg";
import { useMobileMenu } from "../Context/ContextMobileMenu";

export default function Product() {
  const { showMobileMenu } = useMobileMenu();
  
  return (
    !showMobileMenu &&
    <div className="solution-container">
      <h3 className="section-title">Produtos</h3>
      <h2 className="solution-heading">Sob medida para você</h2>
      <p className="solution-subheading">
        Inovação é com a gente! A <span className="highlight">Turbasso's Turbos</span> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
      </p>
      <div className="solution-cards">
        <div className="solution-card">
          <div className="solution-icon">
            <img src={Turbo} alt="Icone de Vencedor" />
          </div>
          <h3 className="solution-title">Turbina ZR Turbo .70 Black</h3>
          <p className="solution-description" dangerouslySetInnerHTML={{ __html: "Caixa Fria: .70 com Refluxo <br />Turbo com 01 Ano de Garantia via fabrica <br />Pressão máxima de trabalho indicada: 2bar para eixos até 52mm e 2,5bar para eixos acima de 58mm" }}></p>
        </div>
      </div>
    </div>
  );
}
