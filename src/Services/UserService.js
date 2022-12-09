import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api/users';

class UserService{

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    // updateUser(user, userId) {
    //     return axios.put(USER_API_BASE_URL + '/' + userId, user);
    // }

    updateUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.userId,
            {
                login: user.login,
                credentials: user.credentials,
                email: user.email,
                gender: user.gender,
                birthday: user.birthday,
                role: {
                    rolesId: user.role.rolesId,
                    roles: user.role.roles
                },
        });
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService();