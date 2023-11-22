import app from "./app.js";

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});