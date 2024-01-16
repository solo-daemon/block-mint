import axios from 'axios'
const API_KEY = 'A5SNSIIEJ87S6B1TKX5D5X132B5JWTNYGJ'

export async function ethbalance (setBalance) {
    const address = sessionStorage.getItem('accountId')
    axios.get("https://api-sepolia.etherscan.io/api?module=account&action=balance&address="+address+"&tag=latest&apikey="+API_KEY
    ).then((res)=>{
        // console.log((parseInt(res.data.result)))
        setBalance((res.data.result/10**18).toFixed(2))
    }).catch(e=>{
        console.log(e)
    })
}

export async function transactionList (setTransaction) {
    const address = sessionStorage.getItem('accountId')
    axios.get("https://api-sepolia.etherscan.io/api?module=account&action=txlist&address="+address+"&startblock=0&endblock=99999999&page=1&offset=1000&sort=asc&apikey="+API_KEY)
    .then((res)=>{
        setTransaction(parseInt(res.data.result.length))
        console.log(parseInt(res.data.result.length))
    }).catch((e)=>{
        console.log(e)
    })
}

