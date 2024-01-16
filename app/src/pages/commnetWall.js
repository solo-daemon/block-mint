import React, { useEffect } from "react";
import { Textarea,Button, Card, CardBody } from "@nextui-org/react";
import { commentWithMetamask } from "../utils/comment-with-metamask";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers5/react'
import { ethers } from 'ethers'

const USDTAddress = '0x200d9c79a3378fddfc3237debfb92ee78b1879a3'

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const USDTAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"name": "MessagePosted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			}
		],
		"name": "postMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMessagesCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "messages",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "content",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "text",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const Comment = (props) =>{
    const commentStyles = [
        {
            cardcolor: "border-red-400",
            textcolor: "text-red-400",
        },
        {
            cardcolor: "border-teal-400",
            textcolor: "text-teal-400",
        },
        {
            cardcolor: "border-yellow-400",
            textcolor: "text-yellow-400",
        },
        {
            cardcolor: "border-lime-400",
            textcolor: "text-lime-400",
        },
        {
            cardcolor: "border-sky-400",
            textcolor: "text-sky-400",
        }
    ]
    const [commentStyle,setCommentStyle] = React.useState({cardcolor: "border-orange-400",textcolor: "text-orange-400"})
    const comment = "This is comment This is comment This is comment This is comment This is comment This is comment"
    useEffect(()=>{
        const rand = Math.floor(Math.random()*5)
        setCommentStyle(commentStyles[rand])
    },[])
    return (
        <div className="mx-2 my-2">
            <Card className={commentStyle.cardcolor} style={{
                maxWidth: "300px",
                height: "100px",
                borderWidth: "medium",
            }}>
                <CardBody className={commentStyle.textcolor}> 
                        <div className="flex justify-center h-[100px] items-center">
                            {props.text.substring(0,40)+"..."}
                        </div>
                </CardBody>
            </Card>
        </div>
    )
}


export const CommentWall = () => {
    const { address, chainId, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider()
    const [yearEndComments,setYearEndComments] = React.useState([])
    async function getMessage(){
        if(!isConnected) throw Error("User disconnected")

        const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
        const signer = await ethersProvider.getSigner()
        // The Contract object
        const USDTContract = new ethers.Contract(USDTAddress, USDTAbi, signer)
        const USDTString = await USDTContract.getMessage()
        setYearEndComments(USDTString)
    }
    async function postMessage(){
        if(!isConnected) throw Error("User disconnected")
        try{
        const ethersProvider =  new ethers.providers.Web3Provider(walletProvider)
        const signer = await ethersProvider.getSigner()
        // The Contract object
        const USDTContract = new ethers.Contract(USDTAddress, USDTAbi, signer)
        const USDTString = await USDTContract.postMessage(comment)
        }catch(e){
            console.log(e)
        }
    }
    // const yearEndComments = [
    //     "As the year wraps up, I'm thinking about the good and tough times. Each moment taught me something, and I'm thankful for the lessons.",
    //     "This year was a bit of a ride! Had some ups, some downs. Looking back, I can see I've gotten stronger and faced things I never thought I could.",
    //     "In the big picture of life, this year added new stuff. Some parts were surprising, but going through them showed me how tough I can be.",
    //     "Closing out the year, I'm holding onto memories, both happy and sad. Cheers to what I've learned and whatever comes next!",
    //     "The year is like a book, and each day is a page. Looking back, I see growth, laughs, and a bit of drama. Excited for the next chapter!",
    //     "Thinking about this past year, I'm grateful for all the good stuff. Even when things got tough, there were always moments that made me smile.",
    //     "Saying goodbye to the year, I appreciate the friends who stuck around, the challenges that made me better, and the dreams still keeping me excited.",
    //     "This year was a wild journey with surprises and changes. As it ends, I'm looking forward to what's next and feeling hopeful about the future.",
    //     "Reflecting on the year, it's like a puzzle coming together. Grateful for the ups and downs that made me who I am today.",
    //     "As the year comes to a close, I'm thinking about all the moments, big and small. Each one added something special to the story of this year.",
    //   ];
    useEffect(()=>{
        getMessage()
    },[])
    const [comment,setComment] = React.useState("")
    return (
        <>
          <div className="flex justify-center mt-8 content-center" >
        <Card className="min-w-[400px] py-2 px-4">
            
            <Textarea
        variant="bordered"
        placeholder="Comment for the upcoming year"
        disableAnimation
        disableAutosize
        classNames={{
            base: "max-w-lg",
            input: "resize-y min-h-[100px]",
        }}
        value={comment}
        onChange={(e)=>{setComment(e.target.value)}}
        />
        <Button className="my-2" color="primary" onClick={postMessage}>Comment</Button>
    </Card>
    </div>  
    <div className="px-16 my-16 flex flex-wrap justify-center">
      {yearEndComments.map((comment)=>{
        return(
            <Comment text={comment}/>
        )
      })}
    </div>
    </>
    )
}