const currAssetPriceAPI_URL = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current'

fetch(currAssetPriceAPI_URL, {
    method: 'POST',
    headers: {
        'x-api-key' : 'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev'
    },
}).then(function (response) {
    // The API call was successful!
    console.log("API Call Successful")
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {
    // This is the JSON from our response
    console.log(data);
}).catch(function (err) {
    //There was an error
    console.warn('Something went wrong.', err);
});

// fetch(currAssetPriceAPI_URL, {
//         method: 'POST',
//         headers: {
//             'x-api-key' : 'dmH5MjtLBu6cJ9QJ3BfvA3mFmin2LNf72SHFyxev'
//         },
//     }
//     ).then(response => response.json()
//     ).then(json => viewPricing(json));

// function viewPricing(json) {
//     const assetPriceDiv = document.querySelector('#Current-Asset-Pricing');
//     const assetPriceElement = document.createElement('p');
//     assetPriceElement.innerText = 'Asset Symbol: {json.assetSymbol}';
//     assetPriceDiv.append(assetPriceElement);
//     assetPriceElement.innerText = 'Current Price of Asset: ${json.price}';
//     assetPriceDiv.append(assetPriceElement);
//     assetPriceElement.innerText = 'Price correct as at: ${json.timestamp}';
//     assetPriceDiv.append(assetPriceElement);
// }
