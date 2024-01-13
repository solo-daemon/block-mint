import React, { useEffect, useState } from 'react';
import './cardCarousel.css'; // Create this CSS file to style your cards
import { Card, CardBody } from '@nextui-org/react';
import { ethbalance } from '../api/apis';
const CarouselCard = (props) =>{
    const [counter,setCounter] = React.useState(0)
    const [balance,setBalance] = React.useState(2.45)
    useEffect(()=>{
    let count = 0;
    const targetCount = balance; // Set your target number here
    const duration = 2000; // Set the duration of the animation in milliseconds
    const interval = 10; // Set the interval for each step in milliseconds

    const increment = targetCount / (duration / interval);

    const updateCounter = () => {
        count += increment;
        setCounter(count.toFixed(2))

    if (count >= targetCount) {
      clearInterval(animationInterval);
      setCounter(targetCount)
    }
  };
  const animationInterval = setInterval(updateCounter, interval);
    },[balance])

    return (
        <div className='h-80 bg-neutral-600'>
            <Card className='min-w-[700px] bg-neutral-600 text-slate-100'>
            <CardBody>
                <div className='flex justify-center text-9xl py-8 my-2'> {counter + 'eth'} </div>
                <div className='flex justify-center text-3xl my-6'>Total balance</div>
            </CardBody>
        </Card>
        </div>
    )
}

const CarouselCard2 = (props) =>{
  const [counter,setCounter] = React.useState(0)
  const [balance,setBalance] = React.useState(15)
  useEffect(()=>{
  let count = 0;
  const targetCount = balance; // Set your target number here
  const duration = 2000; // Set the duration of the animation in milliseconds
  const interval = 10; // Set the interval for each step in milliseconds

  const increment = targetCount / (duration / interval);

  const updateCounter = () => {
      count += increment;
      setCounter(Math.floor(balance))

  if (count >= targetCount) {
    clearInterval(animationInterval);
    setCounter(targetCount)
  }
};
const animationInterval = setInterval(updateCounter, interval);
  },[balance])

  return (
      <div className='h-80 bg-neutral-600'>
          <Card className='min-w-[700px] bg-neutral-600 text-slate-100'>
          <CardBody>
              <div className='flex justify-center text-9xl py-8 my-2'> {counter} </div>
              <div className='flex justify-center text-3xl my-6'>Total no of NFTs</div>
          </CardBody>
      </Card>
      </div>
  )
}

const CarouselCard3 = (props) =>{
  const [counter,setCounter] = React.useState(0)
  const [balance,setBalance] = React.useState(15347)
  useEffect(()=>{
  let count = 0;
  const targetCount = balance; // Set your target number here
  const duration = 2000; // Set the duration of the animation in milliseconds
  const interval = 10; // Set the interval for each step in milliseconds

  const increment = targetCount / (duration / interval);

  const updateCounter = () => {
      count += increment;
      setCounter(Math.floor(balance))

  if (count >= targetCount) {
    clearInterval(animationInterval);
    setCounter(targetCount)
  }
};
const animationInterval = setInterval(updateCounter, interval);
  },[balance])

  return (
      <div className='h-80 bg-neutral-600'>
          <Card className='min-w-[700px] bg-neutral-600 text-slate-100'>
          <CardBody>
              <div className='flex justify-center text-9xl py-8 my-2'> {counter} </div>
              <div className='flex justify-center text-3xl my-6'>Total transactions</div>
          </CardBody>
      </Card>
      </div>
  )
}

const CardCarousel = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handlePrev = () => {
    setSelectedCard((prevCard) => (prevCard === 0 ? 2 : prevCard - 1));
  };

  const handleNext = () => {
    setSelectedCard((prevCard) => (prevCard === 2 ? 0 : prevCard + 1));
  };

  return (
    <div className="flex justify-center my-4">
        <Card className="card-carousel min-w-[700px] bg-zinc-800">
        <input type="radio" name="card" id="card1" checked={selectedCard === 0} readOnly />
        <input type="radio" name="card" id="card2" checked={selectedCard === 1} readOnly />
        <input type="radio" name="card" id="card3" checked={selectedCard === 2} readOnly />

        <div className="cards" style={{ transform: `translateX(calc(-100% * ${selectedCard}))` }}>
            <div className="card" id="card1">
            <CarouselCard />
            </div>

            <div className="card" id="card2">
            <CarouselCard2/>
            </div>

            <div className="card" id="card3">
            <CarouselCard3/>
            </div>
        </div>

        <div className="dots">
            <label htmlFor="card1"></label>
            <label htmlFor="card2"></label>
            <label htmlFor="card3"></label>
        </div>

        <div className="controls">
            <label htmlFor="card1" className="prev" onClick={handlePrev}>
            </label>
            <label htmlFor="card2" className="next" onClick={handleNext}>
            </label>
        </div>
        </Card>
    </div>
  );
};

export default CardCarousel;
