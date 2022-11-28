import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/api/products';

class ProductService{

    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + productId)
    }
}

export default new ProductService();