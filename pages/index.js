import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://notifications-api-khaki.vercel.app/api/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, message }),
      });

      if (response.status === 201) {
        setNotificationMessage("Notificação enviada com sucesso");
        setTimeout(() => {
          setNotificationMessage("");
        }, 5000);
      } else {
        document.getElementById("response").innerHTML =
          "Erro ao enviar notificação.";
      }

      setTitle("");
      setMessage("");
    } catch (error) {
      document.getElementById("response").innerHTML =
        "Erro ao enviar notificação.";
      console.error(error);
    }
  };

  const handleClearNotifications = async () => {
    try {
      const response = await fetch("https://notifications-api-khaki.vercel.app/api/limpar", {
        method: "DELETE",
      });

      if (response.status === 200) {
        setNotificationMessage("Notificações limpas com sucesso");
        setTimeout(() => {
          setNotificationMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>PagaMuito.App - Notificações</h1>

      {notificationMessage && (
        <div id="notificationMessage" className="notification-message">
          {notificationMessage}
        </div>
      )}

      <form id="notificationForm" onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <br />
        <textarea
          id="title"
          name="title"
          className="input-text"
          rows="1"
          cols="50"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
        <br />
        <br />

        <label htmlFor="message">Mensagem:</label>
        <br />
        <textarea
          id="message"
          name="message"
          className="message-text"
          rows="4"
          cols="50"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <br />

        <div className="buttons">
          <button type="submit" className="enviar-btn">
            Enviar Notificação
          </button>
          <button
            type="button"
            className="limpar-btn"
            onClick={handleClearNotifications}
          >
            Limpar Notificações
          </button>
        </div>
      </form>

      <div id="response"></div>
    </div>
  );
}
