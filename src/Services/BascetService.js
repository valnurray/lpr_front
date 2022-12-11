import axios from 'axios';

const BASCET_API_BASE_URL = 'http://localhost:8080/api/bascet';

class BascetService{

    getBascet(){
        return axios.get(BASCET_API_BASE_URL);
    }

    getBascetbyId(bascetId){
        return axios.get(BASCET_API_BASE_URL + '/' + bascetId)
    }
}

export default new BascetService();