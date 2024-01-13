import React, { useEffect } from "react";
import { Textarea,Button, Card, CardBody } from "@nextui-org/react";

const Comment = (props) =>{
    const commentStyles = [
        {
            cardcolor: "",
            textcolor: "",
        },
        {
            cardcolor: "",
            textcolor: "",
        },
        {
            cardcolor: "",
            textcolor: "",
        },
        {
            cardcolor: "",
            textcolor: "",
        },
        {
            cardcolor: "",
            textcolor: "",
        }
    ]
    const [commentStyle,setCommentStyle] = React.useState({cardcolor: "",textcolor: ""})

    useEffect(()=>{

    },[])
    return (
        <div>
            <Card className={"max-w-[300px] "+commentStyle.cardcolor}>
                <CardBody className={commentStyle.textcolor}> 
                        This is the comment
                </CardBody>
            </Card>
        </div>
    )
}

export const CommentWall = () => {
    useEffect(()=>{

    },[])
    return (
        <div style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            backgroundImage: 'url("https://c1.wallpaperflare.com/preview/721/95/791/post-it-notes-sticky-notes-note-notice-board.jpg")',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}

        className="text-slate-100">
          <div className="flex justify-center mt-8 content-center" >
        <Textarea
      variant="bordered"
      placeholder="Comment for the upcoming year"
      disableAnimation
      disableAutosize
      classNames={{
        base: "max-w-lg",
        input: "resize-y min-h-[100px]",
      }}
    />
    <Button>Comment</Button>
    </div>  
    <div className="px-16 my-16">
      <Comment />
    </div>
        </div>
    )
}