import "dotenv/config";
import app from "./src/app.js";

// 3000 é o número da porta lógica onde a comunicação vai acontecer
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando!");
});