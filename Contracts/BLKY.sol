// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BlockyToken is ERC20 {
    // Address of the contract owner
    address public owner;

    // Constructor to initialize the token with a name, symbol, and initial supply
    constructor() ERC20("Blocky", "BLKY") {
        // Set the contract owner to the address that deploys the contract
        owner = msg.sender;

        // Mint initial supply to the contract owner
        _mint(owner, 1000000 * 10**decimals());
    }

    // Function to mint additional tokens (only callable by the owner)
    function mint(address account, uint256 amount) external {
        require(msg.sender == owner, "Only the owner can mint");
        _mint(account, amount);
    }
}
