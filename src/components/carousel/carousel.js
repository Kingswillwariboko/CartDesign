import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import next from "../../assets/icon-next.svg"
import previous from "../../assets/icon-previous.svg"



import "./carousel.scss"

const Carousel = ()=> {
    const [images, setImages] = useState([])
  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g"})

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getAssets().then((entries) => {
          setImages(entries)
        })
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries()
  }, [images, client])
    

    const[currentIndex, setCurrentIndex] = useState(0)

    const carouselScroll = () =>{
        if(currentIndex === images.length -1){
            return setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    }

    const nextMove = ()=>{
        if(currentIndex === images.length -1){
            return setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
    }

    const previousMove = () =>{
        if(currentIndex === images.length -1){
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
            {images?.items?.slice(0,3).map((image) => (
                     <div key={image.fields.title} className="carousel-item"
                    style={{transform: `translate(-${currentIndex * 100}%)`}}><img src={image.fields.file.url} alt=""/></div>
                    
                ))}

                <button  onClick={nextMove} className="next">
                    <img src={next} alt="next" />
                </button>

                <button onClick={previousMove} className="previous">
                    <img src={previous} alt="next" />
                </button>
            </div>

            
            <div className="carousel-container-desktop">
            {images?.items?.slice(0,3).map((image) => (
                     <div key={image.fields.title} className="carousel-item"
                        style={{transform: `translate(-${currentIndex * 100}%)`}}><img src={image.fields.file.url} alt=""/></div>
                        
                        ))}      
            </div>    

            <div className="carousel-menu">
            {images?.items?.slice(0,3).map((image, index) => (
                           <div key={image.fields.title} onClick={()=>  setCurrentIndex(index)} className={currentIndex === index ? "main": 'round'} >
                                    <img src={image.fields.file.url} alt=""/>
                                </div>
                           ))}  
            </div>  

            
    </main>
   )
}

export default Carousel;