// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract AnonymousForum {
    // Define a struct to represent each message
    struct Message {
        address sender; // Address of the message sender
        string content; // Content of the message
    }

    // Declare an array to store all messages
    Message[] public messages;
    string[] public text;

    // Address of the contract owner
    address public owner;

    // Event emitted when a message is posted
    event MessagePosted(address indexed sender, string content);

    // Modifier to restrict access to only the contract owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Contract constructor sets the owner to the address that deploys the contract
    constructor() {
        owner = msg.sender;
    }

    // Function to post a message to the forum
    function postMessage(string memory _content) public {
        // Create a new Message object
        Message memory newMessage = Message({
            sender: msg.sender,
            content: _content
        });

        // Add the new message to the array
        messages.push(newMessage);
        text.push(_content);

        // Emit an event to indicate that a new message has been posted
        emit MessagePosted(msg.sender, _content);
    }

    // Function to get the total number of messages
    function getMessagesCount() public view returns (uint256) {
        return messages.length;
    }

    // Function to retrieve the details of a specific message by index
    function getMessage() public view returns (string[] memory) {
        return (text);
    }

    // Function to allow the owner to withdraw any accidentally sent funds
    function withdraw() external onlyOwner {
        // Transfer the contract's balance to the owner
        payable(owner).transfer(address(this).balance);
    }
}
