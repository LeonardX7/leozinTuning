export async function sendEmail(toEmail: string, content: string): Promise<void> {

  const token = "token"

  try {
    const response = await fetch('api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        to_email: toEmail,
        content: content,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar o e-mail: ${response.statusText}`);
    }

    console.log("E-mail enviado com sucesso!");
  } catch (error) {
    console.error("Erro ao enviar a requisição:", error);
    throw error;
  }
}
