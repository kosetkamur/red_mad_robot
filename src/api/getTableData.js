import axios from 'axios';
const url = 'http://localhost:8080/api/users';

export default class GetTableData {
    static async getAll() {
        try{
            let getData = await axios.get(url);
            return getData.data;
        } catch (e) {
            console.log(e)
        }
    }
}
