import axios from "axios";

class usersService{
    static async getUsers(){
        const response = await axios.get(`https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error.response.data)
        });
       console.log('response', response)
    }
    
    static async getUsersById(userId){
        const response = await axios.get(`https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/${userId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error.response.data)
        });
        return response
    }

    static async getAddressUsersById(userId){
        const response = await axios.get(`https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/${userId}/address`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error.response.data)
        });
        return response
    }
    
    static async getContactsUsersById(userId){
        const response = await axios.get(`https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/${userId}/contacts`)
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.log(error.response.data)
        });
       return response;
    }

    static async getUsersDataById(userId){
        const usersAddress = await this.getAddressUsersById(userId)
        const usersContacts = await this.getContactsUsersById(userId)
        const usersData = await this.getUsersById(userId)

        return {...usersData,addresses:usersAddress,contacts:usersContacts}
    }

}

export default usersService;