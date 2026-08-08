import api from "../Api/axios"; 
export const filterByCategories = async (category)=> {
    const response = await api.get(`/products/category/${category}`); 
    return response.data
}
