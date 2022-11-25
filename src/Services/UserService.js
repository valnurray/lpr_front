import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/users';

class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService();