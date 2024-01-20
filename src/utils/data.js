export const categories_raw = [
    {
        name: "Animales",
        qty: 3,
        image: require("../../assets/animales/animales-2.jpg"),
    },
    {
        name: "Anime",
        qty: 17,
        image: require("../../assets/anime/anime-2.jpg"),
    },
    {
        name: "Comida",
        qty: 17,
        image: require("../../assets/comida/comida-2.jpg"),
    },
    {
        name: "Disney",
        qty: 8,
        image: require("../../assets/disney/disney-2.jpg"),
    },
    {
        name: "Futurista",
        qty: 9,
        image: require("../../assets/futurista/futurista-2.jpg"),
    },
    {
        name: "Naturaleza",
        qty: 18,
        image: require("../../assets/naturaleza/naturaleza-2.jpg"),
    },
    {
        name: "Vehiculos",
        qty: 9,
        image: require("../../assets/vehiculos/coche-2.jpg"),
    }
]

export const animales = [
    require("../../assets/animales/animales-1.jpg"),
    require("../../assets/animales/animales-2.jpg"),
    require("../../assets/animales/animales-3.jpg"),
]
export const anime = [
    require("../../assets/anime/anime-1.jpg"),
    require("../../assets/anime/anime-2.jpg"),
    require("../../assets/anime/anime-3.jpg"),
    require("../../assets/anime/anime-4.jpg"),
    require("../../assets/anime/anime-5.jpg"),
    require("../../assets/anime/anime-6.jpg"),
    require("../../assets/anime/anime-7.jpg"),
    require("../../assets/anime/anime-8.jpg"),
    require("../../assets/anime/anime-9.jpg"),
    require("../../assets/anime/anime-10.jpg"),
    require("../../assets/anime/anime-11.jpg"),
    require("../../assets/anime/anime-12.jpg"),
    require("../../assets/anime/anime-13.jpg"),
    require("../../assets/anime/anime-14.jpg"),
    require("../../assets/anime/anime-15.jpg"),
    require("../../assets/anime/anime-16.jpg"),
    require("../../assets/anime/anime-17.jpg"),
]
export const comida = [
    require("../../assets/comida/comida-1.jpg"),
    require("../../assets/comida/comida-2.jpg"),
    require("../../assets/comida/comida-3.jpg"),
    require("../../assets/comida/comida-4.jpg"),
    require("../../assets/comida/comida-5.jpg"),
    require("../../assets/comida/comida-6.jpg"),
    require("../../assets/comida/comida-7.jpg"),
    require("../../assets/comida/comida-8.jpg"),
    require("../../assets/comida/comida-9.jpg"),
    require("../../assets/comida/comida-10.jpg"),
    require("../../assets/comida/comida-11.jpg"),
    require("../../assets/comida/comida-12.jpg"),
    require("../../assets/comida/comida-13.jpg"),
    require("../../assets/comida/comida-14.jpg"),
]
export const disney = [
    require("../../assets/disney/disney-1.jpg"),
    require("../../assets/disney/disney-2.jpg"),
    require("../../assets/disney/disney-3.jpg"),
    require("../../assets/disney/disney-4.jpg"),
    require("../../assets/disney/disney-5.jpg"),
    require("../../assets/disney/disney-6.jpg"),
    require("../../assets/disney/disney-7.jpg"),
    require("../../assets/disney/disney-8.jpg"),
]
export const futurista = [
    require("../../assets/futurista/futurista-1.jpg"),
    require("../../assets/futurista/futurista-2.jpg"),
    require("../../assets/futurista/futurista-3.jpg"),
    require("../../assets/futurista/futurista-4.jpg"),
    require("../../assets/futurista/futurista-5.jpg"),
    require("../../assets/futurista/futurista-6.jpg"),
    require("../../assets/futurista/futurista-7.jpg"),
    require("../../assets/futurista/futurista-8.jpg"),
    require("../../assets/futurista/futurista-9.jpg"),
]
export const naturaleza = [
    require("../../assets/naturaleza/naturaleza-1.jpg"),
    require("../../assets/naturaleza/naturaleza-2.jpg"),
    require("../../assets/naturaleza/naturaleza-3.jpg"),
    require("../../assets/naturaleza/naturaleza-4.jpg"),
    require("../../assets/naturaleza/naturaleza-5.jpg"),
    require("../../assets/naturaleza/naturaleza-6.jpg"),
    require("../../assets/naturaleza/naturaleza-7.jpg"),
    require("../../assets/naturaleza/naturaleza-8.jpg"),
    require("../../assets/naturaleza/naturaleza-9.jpg"),
    require("../../assets/naturaleza/naturaleza-10.jpg"),
    require("../../assets/naturaleza/naturaleza-11.jpg"),
    require("../../assets/naturaleza/naturaleza-12.jpg"),
    require("../../assets/naturaleza/naturaleza-13.jpg"),
    require("../../assets/naturaleza/naturaleza-14.jpg"),
    require("../../assets/naturaleza/naturaleza-15.jpg"),
    require("../../assets/naturaleza/naturaleza-16.jpg"),
    require("../../assets/naturaleza/naturaleza-17.jpg"),
    require("../../assets/naturaleza/naturaleza-18.jpg"),
    require("../../assets/naturaleza/naturaleza-19.jpg"),
]
export const vehiculos = [
    require("../../assets/vehiculos/coche-1.jpg"),
    require("../../assets/vehiculos/coche-2.jpg"),
    require("../../assets/vehiculos/coche-3.jpg"),
    require("../../assets/vehiculos/coche-4.jpg"),
    require("../../assets/vehiculos/coche-5.jpg"),
    require("../../assets/vehiculos/coche-6.jpg"),
    require("../../assets/vehiculos/coche-7.jpg"),
    require("../../assets/vehiculos/coche-8.jpg"),
    require("../../assets/vehiculos/coche-9.jpg"),
]
/* 
export async function fetchImages(category, length) {
    const images = [];
    let result = "";
    
    const urlSegment = "https://mollydigital.manu-scholz.com/wp-content/uploads/2023/10/unas-"
    const patternWithoutÑ = category.replace("ñ", "n");
    const pattern = patternWithoutÑ.replace(/ /g, '-').toLowerCase();  

    for (let i = 1; i <= length; i++) {
        result = urlSegment + pattern + "-" + i +".jpg"
        images.push(result);
    }

    return images;
} */