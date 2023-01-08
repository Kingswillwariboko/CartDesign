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
        image: 'https://user-images.githubusercontent.com/54893238/211214122-3bd721d5-8ba7-4de1-a026-860884afc4b8.jpeg'
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