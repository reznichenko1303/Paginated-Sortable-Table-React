export default class ApiService {
    constructor() {
        this.FETCH_URL = './db.json'
    }
    async getBooks() {
       const response = await fetch(this.FETCH_URL)
        return await response.json()
    }
}
