import "../styles/contact.css";
import { useMobileMenu } from "../Context/ContextMobileMenu";
import { sendEmail } from "../utils/sendEmail";

export default function Contact() {
  const { showMobileMenu } = useMobileMenu();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const from = form.email.value;
    const message = form.message.value;
    try {
      await sendEmail(from, message);
      alert("E-mail enviado com sucesso!");
    } catch (error) {
      alert("Erro ao enviar o e-mail.");
    }
  };

  return (
    !showMobileMenu &&
    <div className="contact-container">
      <h3 className="section-title">Envie sua dúvida</h3>
      <h2 className="contact-heading">Entre em contato</h2>
      <p className="contact-subheading">
        Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder. 😊
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Seu melhor Email" className="contact-input" required />
        <textarea name="message" placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" className="contact-textarea" required></textarea>
        <button type="submit" className="contact-button">Enviar</button>
      </form>
    </div>
  );
}
