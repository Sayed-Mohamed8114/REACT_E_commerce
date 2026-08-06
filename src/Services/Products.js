import api from "../Api/axios";

export const getAllProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const addNewProduct = async (product) => {
  const response = await api.post("/product", product);
  return response.data;
};

export const getSingleProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const updateProduct = async (id,product) => {
    const response = await api.put(`/products/${id}`,product);
    return response.data ;
}

export const deleteProduct = async (id) => {
    const response = await api.delete(`/product/${id}`);
    return response.data;
}