exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    const data = JSON.parse(event.body);
    const { usuario, contraseña } = data;

    console.log("Nuevo registro:", usuario, contraseña);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }
  return { statusCode: 405, body: "Método no permitido" };
};
