import axios from "axios";

class usersService {
  static async getUsers() {
    const response = await axios
      .get(
        `https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users`
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return response;
  }

  static async getUsersById(userId) {
    const response = await axios
      .get(`https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return response;
  }

  static async getAddressUsersById(userId) {
    const response = await axios
      .get(
        `https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/${userId}/address`
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return response;
  }

  static async getContactsUsersById(userId) {
    const response = await axios
      .get(
        `https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1/users/${userId}/contacts`
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    return response;
  }

  static async getUsersDataById(userId) {
    const usersAddress = await this.getAddressUsersById(userId);
    const usersContacts = await this.getContactsUsersById(userId);
    const usersData = await this.getUsersById(userId);

    return { ...usersData, addresses: usersAddress, contacts: usersContacts };
  }

  static async getUsersData() {
    const usersData = await this.getUsers()
    .then((response) => {
      return this.test(response);
    })
    .catch((error) => {
      console.log(error);
    });
    console.log(usersData);
    return usersData;
  }

  static async test(usersData) {

    const build = async () => {
      const result = [];

      for (const users of usersData) {
        const userAddress = await this.getAddressUsersById(users.id);
        const userContacts = await this.getContactsUsersById(users.id);
        result.push({users, addresses: userAddress, contacts: userContacts});
      }
      return result;
    }  
      
    const resultado = build().then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.log(error);
    });

    return resultado;
  }    
    
  static async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default usersService;
