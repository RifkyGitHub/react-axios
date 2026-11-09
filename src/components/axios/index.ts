// Membuat Konfigurasi Awal Axios 

import axios from "axios";

export const requestDummyJSON = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const requestPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});
export const fakeStoreAPI = axios.create({
    baseURL: 'https://fakestoreapi.com'
})