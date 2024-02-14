//Traer mensajes
export const getMensajes = async () => {
  try {
    const mensajes = await fetch("https://dizzgob.ccontrolz.com/chat/getAll");
    const data = await mensajes.json();

    const mensajesFormateados = data.map((mensaje) => ({
      _id: mensaje.IdMessage,
      text: mensaje.Text,
      image: mensaje.Image,
      createdAt: mensaje.createDate,
      user: {
        _id: mensaje.User.IdUser,
        name: mensaje.User.FirstName,
        avatar: mensaje.User.ProfileImage,
      },
    }));

    return mensajesFormateados;
  } catch (error) {
    console.error("Error al obtener los mensajes:", error.message);
    throw error;
  }
};

//Enviar mensajes
export const sendMessage = async (id, text) => {
  try {
    const response = await fetch("https://dizzgob.ccontrolz.com/chat/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Text: text,
        IdUser: id,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al enviar mensaje");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("Error al enviar mensaje");
  }
};

//Enviar Imagen
export const sendImage = async (formData) => {
  try {
    const response = await fetch(
      "https://dizzgob.ccontrolz.com/chat/sendMessageImage",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error al enviar image");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("Error al enviar image");
  }
};
