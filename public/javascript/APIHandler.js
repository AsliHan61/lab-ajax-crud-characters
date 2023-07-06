const { default: axios } = require("axios");

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
return this.api.get('/characters')
  }

  getOneRegister (id) {
return this.api.get('/character/${id}')
  }

  createOneRegister (newCharacter) {
const url= '${this.baseUrl}/characters/${characterId}';
  }

  updateOneRegister (id, register) {
return this.api.patch('/character/${id}', register)
  }

  deleteOneRegister (id) {
return axios.post(url, newCharacter);
  }
}
