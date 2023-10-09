import notifications from "./notifications";

export default function handler(req, res) {
    if (req.method === "GET") {
      res.status(200).json(notifications);
    } else {
      res.status(404).json({ message: "Rota não encontrada" });
    }
  }
  