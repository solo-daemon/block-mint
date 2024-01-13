import Web3 from 'web3'
async function Logout (){
    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts();
    if(accounts.length==0){
        window.location.href='/'
    }
}
export async function loginWithMetaMask() {
    try {
        // Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create a Web3 instance
            const web3 = new Web3(window.ethereum);

            // Get the selected account
            const accounts = await web3.eth.getAccounts();
            const selectedAccount = accounts[0];
            sessionStorage.setItem('accountId',selectedAccount)
            window.location.href='/dashboard'
            console.log('Selected Account:', selectedAccount);
            window.ethereum.on('accountsChanged', Logout);
        } else {
            console.log('MetaMask not installed');
        }
    } catch (error) {
        console.error('Error during MetaMask login:', error);
        // Handle errors or notify the user
    }
}