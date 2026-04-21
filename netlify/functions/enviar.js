exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body);

    console.log("Datos recibidos:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Datos recibidos correctamente", data }),
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error procesando los datos" }),
    };
  }
};
