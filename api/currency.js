export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.monobank.ua/bank/currency");
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Currency fetch failed" });
  }
}
