import axios from 'axios';

const ROLES_API_BASE_URL = 'http://localhost:8080/api/roles';

class RoleService{

    getRoles(){
        return axios.get(ROLES_API_BASE_URL);
    }
    getRoleById(rolesId) {
        return axios.get(ROLES_API_BASE_URL + '/' + rolesId);
    }
}

export default new RoleService();