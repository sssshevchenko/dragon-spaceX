import React, { useState } from 'react';

const MySlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }
    const leftArrowStyles = {
        position: 'absolute',
        top: '300px',
        transform: 'translate(0, -50%)',
        left: '32px',
        color: '#0000ff',
        zIndex: 1,
        cursor: 'pointer',
        fontSize: '45px'
    }
    const rightArrowStyles = {
        position: 'absolute',
        top: '300px',
        transform: 'translate(0, -50%)',
        right: '32px',
        color: '#0000ff',
        zIndex: 1,
        cursor: 'pointer',
        fontSize: '45px'
    }
    const slideStyles = {
        width: '700px',
        height: '455px',
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }
    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center'
    }
    const dotsStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '35px'
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    } 

    return (
        <div style={sliderStyles}>
            <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Photo gallery</h2>
            <div style={leftArrowStyles} onClick={goToPrevious}>❮</div>
            <div style={rightArrowStyles} onClick={goToNext}>❯</div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) =>
                    <div 
                        key={slideIndex} 
                        style={dotsStyles} 
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ⁃
                    </div>
                )}    
            </div>
            
        </div>          
    );
};

export default MySlider;