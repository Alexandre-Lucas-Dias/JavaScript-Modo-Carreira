import mongoose, { mongo } from "mongoose"; // mongoose é a biblioteca da conexão com o banco de dados

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conectaNaDatabase;