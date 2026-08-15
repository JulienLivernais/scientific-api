const BASE_URL = "http://localhost:8001";

async function handleResponse(response) {
  if (!response.ok) {
    let message = `Erreur ${response.status}`;
    try {
      const errorData = await response.json();
      if (errorData.detail) {
        message = errorData.detail;
      }
    } catch {
    }
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

// Notions
export async function getAllNotions() {
  const response = await fetch(`${BASE_URL}/all_notions`);
  return handleResponse(response);
}

// Title search
export async function getNotionByTitle(title) {
  const response = await fetch(
    `${BASE_URL}/title/${encodeURIComponent(title)}`
  );
  return handleResponse(response);
}