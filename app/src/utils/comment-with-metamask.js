export const commentWithMetamask = (passedMessage) =>{
    if (window.ethereum) {
        const ethereum = window.ethereum;
      
        ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            const userAddress = accounts[0];
      
            const message = passedMessage;
            ethereum.request({ method: 'personal_sign', params: [message, userAddress] })
              .then((signedMessage) => {
                console.log('Signed Message:', signedMessage);
              })
              .catch((error) => {
                console.error('Error signing message:', error);
              });
          })
          .catch((error) => {
            console.error('Error requesting accounts:', error);
          });
      } else {
        console.error('MetaMask is not installed');
      }
}