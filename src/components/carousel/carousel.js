import React, {useState, useEffect} from "react"
import next from "../../assets/icon-next.svg"
import previous from "../../assets/icon-previous.svg"



import "./carousel.scss"

const data = [
    {
        image: 'https://user-images.githubusercontent.com/54893238/211213778-97698107-df79-4ac9-b8a2-7bd14b29555c.jpg'
    },
    {
        image: 'https://user-images.githubusercontent.com/54893238/211213795-38e2b70a-957c-424b-a55d-3f216d2f1957.jpg'
    },
    {
        image: 'https://user-images.githubusercontent.com/54893238/211213800-7b1dd756-33bd-4521-9c2c-9aa97bd04439.jpg'
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

                         <div className="round1">
                            <div onClick={()=>  setCurrentIndex(0)} className={currentIndex === 0 ? "main": 'round'} ></div>
                            <div onClick={()=> setCurrentIndex(1)} className={currentIndex === 1 ? "main": 'round'}></div>
                            <div onClick={()=> setCurrentIndex(2)} className={currentIndex === 2 ? "main": 'round'}></div>
                        </div>
            </div>    
    </main>
   )
}

export default Carousel;