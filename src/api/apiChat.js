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

export const getMensajesPrivates = async () => {
  try {
    //const mensajes = await fetch("https://dizzgob.ccontrolz.com/chatprivate/getAll/2");
    //const data = await mensajes.json();
    const mensajesPrueba = [
      {
        _id: 1,
        text: "¡Hola! ¿Cómo estás?",
        createDate: new Date(),
        User: {
          IdUser: 1,
          FirstName: "Usuario 1",
          ProfileImage: "https://i.pinimg.com/736x/4b/a3/43/4ba343a87d8da59e1e4d0bdf7dc09484.jpg",
        },
      },
      {
        _id: 2,
        text: "¡Hola! Estoy bien, ¿y tú?",
        createDate: new Date(),
        User: {
          IdUser: 2,
          FirstName: "Usuario 2",
          ProfileImage: "https://www.google.com/search?sca_esv=9e981a18954981ed&q=jheyson+jhair+arone&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjy24X3i7OEAxWZrZUCHU7VCKMQ0pQJegQIDBAB&biw=1396&bih=668&dpr=1.38#imgrc=JsUbrztxtkaxXM",
        },
      },
      {
        _id: 3,
        text: "¡Genial! ¿Qué has estado haciendo?",
        createDate: new Date(),
        User: {
          IdUser: 1,
          FirstName: "Usuario 1",
          ProfileImage: "https://i.pinimg.com/736x/4b/a3/43/4ba343a87d8da59e1e4d0bdf7dc09484.jpg",
        },
      },
    ];

    const mensajesFormateados = mensajesPrueba.map((mensaje) => ({
      _id: mensaje._id,
      text: mensaje.text,
      createdAt: mensaje.createDate,
      user: {
        _id: mensaje.User.IdUser,
        name: mensaje.User.FirstName,
        avatar: mensaje.User.ProfileImage,
      },
    }));

    return mensajesFormateados;
  } catch (error) {
    console.error("Error al obtener los mensajes de prueba:", error.message);
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
