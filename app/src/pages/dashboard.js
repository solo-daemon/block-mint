import React, { useEffect } from "react";
import { NavBar } from "../components/navbar";
import { PersonalWrapped } from "./personalWrapped";
import { CommentWall } from "./commnetWall";
import { useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight>window.innerHeight ? document.body.scrollHeight : window.innerHeight;

    const particles = [];

    // Particle class
    class Particle {
      constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Bounce off walls
        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
          this.velocity.x = -this.velocity.x;
        }

        if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height) {
          this.velocity.y = -this.velocity.y;
        }
      }
    }

    // Create particles
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width - 2 * radius) + radius;
      const y = Math.random() * (canvas.height - 2 * radius) + radius;
      const color = 'white';
      const velocity = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      };

      particles.push(new Particle(x, y, radius, color, velocity));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update());
      requestAnimationFrame(animate);
    };

    animate();

    // Adjust canvas dimensions on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight>window.innerHeight ? document.body.scrollHeight : window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} className="bg-zinc-800"/>;
};

const OtherAnimatedBackground = () =>{
    useEffect(()=>{
        var w = window.innerWidth,
    h = document.body.scrollHeight*1.05,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 50,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
    ctx.clearRect(0,0,w,h);
    canvas.addEventListener('mousemove', MouseMove, false);
    for(var i = 0; i < arc; i++) {
        var li = parts[i];
        var distanceFactor = DistanceBetween( mouse, parts[i] );
        var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
        ctx.beginPath();
        ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle=li.c;
        if(i%2==0)
        ctx.stroke();
        else
        ctx.fill();
        
        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);
        
        if(li.x > w){
        li.x = 0; 
        }
        if(li.y > h) {
        li.y = 0; 
        }
        if(li.x < 0) {
        li.x = w; 
        }
        if(li.y < 0) {
        li.y = h; 
        }
    
        
    }
    if(time < speed) {
        time++;
    }
    setTimeout(particles,1000/rate);
    }
    function MouseMove(e) {
    mouse.x = e.layerX;
    mouse.y = e.layerY;

    //context.fillRect(e.layerX, e.layerY, 5, 5);
    //Draw( e.layerX, e.layerY );
    }
    function DistanceBetween(p1,p2) {
    var dx = p2.x-p1.x;
    var dy = p2.y-p1.y;
    return Math.sqrt(dx*dx + dy*dy);
    }
    create();
    particles();
    },[])
    return <canvas id="test" style={{ position: 'absolute', top: 0, left: 0 }} className="bg-zinc-800"/>;
}

export const Dashboard = () =>{
    useEffect(()=>{
        const component = document.getElementById('test')
        console.log(component)
    },[])
    const [page,setPage] = React.useState("personal")
    return (
        <>
            {page==="personal" ?<OtherAnimatedBackground /> :
                <AnimatedBackground />
        }
            <div>
            <NavBar setPage={setPage} page={page}/>
            {page==="personal" ?<PersonalWrapped /> :
                <CommentWall />
        }
        </div>
        </>
    )
}