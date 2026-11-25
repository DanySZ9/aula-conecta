// URL completa del recurso de MockAPI, por ejemplo:
// https://<tu-proyecto>.mockapi.io/api/v1/contacts
const API_URL = import.meta.env.VITE_API_URL?.trim();
const TIMEOUT_MS = 15000;

function apiError(message, userMessage) {
  return Object.assign(new Error(message), { userMessage });
}

/** Guarda un mensaje de contacto en MockAPI y devuelve el registro creado. */
export async function sendContactMessage({ name, institution, email, message }) {
  if (!API_URL) {
    throw apiError(
      "Falta VITE_API_URL. Configúrala en .env y reinicia el servidor.",
      "El formulario aún no está disponible. Inténtalo más tarde."
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        institution: institution.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
      }),
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`MockAPI respondió ${response.status}`);
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw apiError(
        "Tiempo de espera agotado",
        "El servidor tardó demasiado y no pudimos confirmar el envío. Inténtalo de nuevo."
      );
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
