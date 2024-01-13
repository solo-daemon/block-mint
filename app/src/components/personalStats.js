import React from "react";
import Slider from 'react-slick'
import { Card, CardBody } from "@nextui-org/react";

const CarouselCards = (props) =>{
    return (
        <div>
        <Card>
            <CardBody>
                Hello
            </CardBody>
        </Card>
        </div>
    )
}

export const PersonalStats = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="flex justify-center my-4">
            <Card className="min-w-[700px] bg-zinc-800">
                <CardBody>
                    <CarouselCards/>
                   <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                    <div>
                        hello
                    </div>
                    <div>hello world</div>
                    </Slider>
                </CardBody>
            </Card>
        </div>
    )
}