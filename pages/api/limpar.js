import notifications from "./notifications";

export default function handler(req, res) {
    if (req.method === "DELETE") {
      notifications.length = 0;
      res.status(200).json({ message: "Notificações limpas com sucesso" });
    } else {
      res.status(404).json({ message: "Rota não encontrada" });
    }
  }
  