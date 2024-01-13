import axios from 'axios'
export async function ethbalance (setBalance) {
    axios.get("http://localhost:60001/ethbalance",{
        data: {
            "publicAddress" : "0x2B6eD29A95753C3Ad948348e3e7b1A251080Ffb9"
        }
    }).then((res)=>{
        setBalance(100)
        console.log(res)
    }).catch(e=>{
        console.log(e)
    })
}

