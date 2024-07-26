export async function getProfesorDate() {
  const LATEST_GAMES = "https://90wp7bc1-8000.brs.devtunnels.ms/api/profesores";

  const rawData = await fetch(LATEST_GAMES);
  const jsonData = await rawData.json();
  return jsonData;
}
