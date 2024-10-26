const URL = "https://670fe58da85f4164ef2c612a.mockapi.io/alimente";

export async function getAllProducts(){
    const response = await fetch(URL);
    const products = await response.json();

    return products;
}

