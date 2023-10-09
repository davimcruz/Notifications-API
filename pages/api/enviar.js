import notifications from "./notifications";

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { title, message } = req.body;
      const notification = { title, message };
      notifications.push(notification);
      res.status(201).json({ message: "Notificação enviada com sucesso" });
    } else {
      res.status(404).json({ message: "Rota não encontrada" });
    }
  }
  