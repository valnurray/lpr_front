import axios from 'axios';

const CATEGORY_API_BASE_URL = 'http://localhost:8080/api/category';

class CategoryService{

    getCategory(){
        return axios.get(CATEGORY_API_BASE_URL);
    }

    getCategoryById(categoryId) {
        return axios.get(CATEGORY_API_BASE_URL + "/" + categoryId)
    }
}

export default new CategoryService();