import axios from "axios";

// a criação da API abaixo faz com que a variável possa trabalhar com os verbos HTTP
const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"});

async function getFavoritos(){
    const response = await favoritosAPI.get("/");

    return response.data;
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`);
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`);
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
};