const BASE_URL = import.meta.env.DEV ? "http://localhost:8001" : "";

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

// Calculations
export async function calculateGravity(mass, gravity) {
  const params = new URLSearchParams({ mass, gravity });
  const response = await fetch(`${BASE_URL}/calculate/gravity?${params}`);
  return handleResponse(response);
}

// Conversions
export async function convertUnit(value, unitFrom, unitTo) {
  const params = new URLSearchParams({
    value,
    unit_from: unitFrom,
    unit_to: unitTo,
  });
  const response = await fetch(`${BASE_URL}/convert?${params}`);
  return handleResponse(response);
}

// Stats
export async function getStats(numbers) {
  const response = await fetch(`${BASE_URL}/stats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(numbers),
  });
  return handleResponse(response);
}