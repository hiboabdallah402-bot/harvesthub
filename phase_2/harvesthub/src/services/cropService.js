const BASE_URL = "http://localhost:3001/crops";

const parseResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

export const getCrops = () =>
  fetch(BASE_URL, { cache: "no-store" }).then(parseResponse);

export const getCropById = (id) =>
  fetch(`${BASE_URL}/${id}`, { cache: "no-store" }).then(parseResponse);

export const addCrop = (crop) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(crop),
  }).then(parseResponse);

export const updateCrop = (id, crop) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(crop),
  }).then(parseResponse);

export const deleteCrop = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" }).then(parseResponse);