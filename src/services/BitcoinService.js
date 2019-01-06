import axios from 'axios'

function getBTC(coins) {
    return  axios.get(`https://blockchain.info/tobtc?currency=USD&value=${1/coins}`)
    .then(res => 1/res.data);
}
function getMarketPrice() {
    return  axios.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
    .then(res => res.data);
}

function getConfirmedTransactions() {
    return  axios.get(`https://api.blockchain.info/charts/n-transactions?format=json&cors=true`)
    .then(res => res.data);
}



export default {
    getBTC,
    getMarketPrice,
    getConfirmedTransactions
}