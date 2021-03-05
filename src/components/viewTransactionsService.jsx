import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view';

class UserService {
    
    getTransactions = async() => {
        const data = await fetch(
            'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',
            {
                method: "POST",
                headers: {
                    "x-api-key": "dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu",
                },
                body: JSON.stringify({
                    "accountKey": "f4481c86-1a64-49a7-b85c-3d4449eabf69"
                }),
            }
        )
    };

}

export default new UserService();