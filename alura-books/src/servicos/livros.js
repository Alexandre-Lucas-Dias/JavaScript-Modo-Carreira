import axios from "axios";

// a criação da API abaixo faz com que a variável possa trabalhar com os verbos HTTP
const livrosAPI = axios.create({baseURL: "http://localhost:8000/livros"});

async function getLivros(){
    const response = await livrosAPI.get("/");

    return response.data;
}

export {
    getLivros
};