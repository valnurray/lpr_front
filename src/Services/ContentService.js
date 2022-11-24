import axios from 'axios';

const CONTENT_API_BASE_URL = 'http://localhost:8080/api/content';

class ContentService{

    getContent(){
        return axios.get(CONTENT_API_BASE_URL);
    }
}
export default new ContentService();