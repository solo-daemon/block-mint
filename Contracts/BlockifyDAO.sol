// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BlockyToken is ERC20 {
    constructor() ERC20("Blocky", "BLKY") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}

contract DAO {
    BlockyToken public blockyToken;
    address public owner;

    // Mapping to track whether an address is a member of the DAO
    mapping(address => bool) public isMember;

    // Event emitted when a new member joins the DAO
    event MemberJoined(address indexed member);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier onlyMember() {
        require(isMember[msg.sender], "Only members can call this function");
        _;
    }

    constructor(address _blockyTokenAddress) {
        blockyToken = BlockyToken(_blockyTokenAddress);
        owner = msg.sender;
    }

    // Function to join the DAO (requires at least 50 BLKY tokens)
    function joinDAO() external {
        require(blockyToken.balanceOf(msg.sender) >= 50 * 10**blockyToken.decimals(), "Insufficient BLKY tokens");
        require(!isMember[msg.sender], "Address is already a member");

        isMember[msg.sender] = true;
        emit MemberJoined(msg.sender);
    }

    // Function to propose and vote on proposals (to be implemented based on DAO requirements)

    // Only owner can withdraw BLKY tokens from the DAO (for example, to distribute rewards)
    function withdrawTokens(address to, uint256 amount) external onlyOwner {
        blockyToken.transfer(to, amount);
    }
}
