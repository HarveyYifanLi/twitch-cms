import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-Id": 'zv9evd84fhm9xva29pvicr798asudy',
        "Authorization": 'Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
});

export default api;