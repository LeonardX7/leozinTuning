export async function sendEmail(fromEmail: string, content: string): Promise<void> {
  const url = "https://us-central1-projeto-arch-labda.cloudfunctions.net/teste";

  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from_email: fromEmail,
        content: content,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar o e-mail: ${response.statusText}`);
    }

    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar a requisição:", error);
  }
}
