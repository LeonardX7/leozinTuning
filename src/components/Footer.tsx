import "../styles/footer.css";
import Logo from "../assets/logo.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <img src={Logo} width={220} height={80} />
                    <div className="social-icons">
                        <i className="icon-instagram"></i>
                        <i className="icon-facebook"></i>
                        <i className="icon-youtube"></i>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Empresa</h3>
                    <ul>
                        <li>Sobre nós</li>
                        <li>Faça parte do time</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Funcionalidades</h3>
                    <ul>
                        <li>Marketing</li>
                        <li>Análise de dados</li>
                        <li>Boot discord</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Recursos</h3>
                    <ul>
                        <li>IOS & Android</li>
                        <li>Teste a Demo</li>
                        <li>Clientes</li>
                        <li>API</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2024 LéozinTuning - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
