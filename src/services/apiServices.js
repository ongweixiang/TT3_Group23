const API_URL =
  "https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/";

class ApiService {
  login(username, password) {
    return fetch(API_URL + 'login',  {
        method: 'POST',
        headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
        body: JSON.stringify({username: username, password: password})
    })
  }

  alt_login =async(username, password)=>{
    const data= await fetch(API_URL + 'login',  {
      method: 'POST',
      headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
      body: {username: username, password: password}
    })
    .then((response)=> response.json())
    .then((response)=> {
      console.log(response);
    })
  }

  userBalance(accountKey) {
    return fetch(API_URL + 'balance',  {
        method: 'POST',
        headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
        body: {accountKey: accountKey}
    })
  }

  currentPricingOfAsset() {
    return fetch(API_URL + 'pricing/current',  {
        method: 'POST',
        headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
    })
  }

  historicalPricingOfAsset() {
    return fetch(API_URL + 'pricing/historical',  {
        method: 'POST',
        headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
    })
  }

  pastTransactions(accountKey) {
    return fetch(API_URL + 'transactions/view',  {
        method: 'POST',
        headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
        body: {accountKey: accountKey}
    })
  }

  buyOrSell(accountKey, orderType, assetAmount) {
    return fetch(API_URL + 'transactions/view',  {
        method: 'POST',
        headers: { 'x-api-key':'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev' },
        body: {accountKey: accountKey, orderType: orderType, assetAmount: assetAmount}
    })
  }


//   currentPricingOfAssetV2() {
//     return fetch(API_URL + 'pricing/current',  {
//         method: 'POST',
//         headers: { 'x-api-key':'dgkCTGTaXm7HYZNgyizLY4ocEVSO7G3c54QcYSIu' },
//     })
//   }
}

export default new ApiService();
