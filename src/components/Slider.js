import React from 'react'
import Image from 'next/legacy/image'

import Image1 from './../../public/foods1.jpg'
import Image2 from './../../public/foods2.jpg'
import Image3 from './../../public/workoutbg.jpg'

export default function Slider() {
  return (
    <div id='slider'>
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image 
                        src={Image1} 
                        width={500} 
                        height={300} 
                        layout='fill' 
                        objectFit='cover' 
                        className="slider-image d-block w-100" 
                        alt="..." 
                    />
                    <div className="carousel-caption">
                        <h5>Fique em forma!</h5>
                        <p>Com uma alimentação saudável e balanceada.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image 
                        src={Image2} 
                        width={500} 
                        height={300} 
                        layout='fill' 
                        objectFit='cover' 
                        className="d-block w-100" 
                        alt="..." 
                    />
                    <div className="carousel-caption d-md-block">
                        <h5>Seu peso ideal</h5>
                        <p>Através de orientação nutricional para emagrecimento, ganho e manutenção de peso de forma saudável.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <Image 
                        src={Image3} 
                        width={500} 
                        height={300} 
                        layout='fill' 
                        objectFit='cover' 
                        className="d-block w-100" 
                        objectPosition='top'
                        alt="..." 
                    />
                    <div className="carousel-caption d-md-block">
                        <h5>Supere-se!</h5>
                        <p>Melhorando o seu desempenho e recuperação pós-exercícios.</p>
                    </div>
                </div>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
