import React, {useState, useEffect} from "react"
import next from "../../assets/icon-next.svg"
import previous from "../../assets/icon-previous.svg"



import "./carousel.scss"

const data = [
    {
        image: 'https://user-images.githubusercontent.com/54893238/211214114-47f4df9f-c533-4d21-b920-8b44e4761b6f.jpeg'
    },
    {
        image: 'https://user-images.githubusercontent.com/54893238/211214122-3bd721d5-8ba7-4de1-a026-860884afc4b8.jpeg'
    },
    {
        image: 'https://user-images.githubusercontent.com/54893238/211214197-fb3b4ff7-f0fb-4082-b588-b3c1962f7ca3.jpeg'
    }
]

const Carousel = ()=> {
    

    const[currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () =>{
        if(currentIndex === data.length -1){
            return setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    }

    const nextMove = ()=>{
        if(currentIndex === data.length -1){
            return setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    }

    const previousMove = () =>{
        if(currentIndex === data.length -1){
            return setCurrentIndex(currentIndex - 1)
        }else{
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(()=>{
        const interval= setInterval(()=>{carouselScroll()},3000)

        return () => clearInterval(interval)
    })


    return(
        <main className="main-main">
            <div className="carousel-container">
                {data.map((item, index)=> {
                    return <div key={index} className="carousel-item"
                    style={{transform: `translate(-${currentIndex * 100}%)`}}><img src={item.image} alt=""/></div>
                    
                })}

                <button  onClick={nextMove} className="next">
                    <img src={next} alt="next" />
                </button>

                <button onClick={previousMove} className="previous">
                    <img src={previous} alt="next" />
                </button>
            </div>

            
            <div className="carousel-container-desktop">
                    {data.map((item, index)=> {
                        return <div key={index} className="carousel-item"
                        style={{transform: `translate(-${currentIndex * 100}%)`}}><img src={item.image} alt=""/></div>
                        
                    })}        
            </div>    

            <div className="carousel-menu">
                           {data.map((item, index)=>{
                            return <div onClick={()=>  setCurrentIndex(index)} className={currentIndex === index ? "main": 'round'} >
                                    <img src={item.image} alt=""/>
                                </div>
                           })}
            </div>  

            
    </main>
   )
}

export default Carousel;