import axios from 'axios';

const ORDERFIELD_API_BASE_URL = 'http://localhost:8080/api/orderfield';

class OrderfieldService{

    getOrderfield(){
        return axios.get(ORDERFIELD_API_BASE_URL);
    }

    getOrderfieldById(orderId){
        return axios.get(ORDERFIELD_API_BASE_URL + '/' + orderId)
    }
}

export default new OrderfieldService();