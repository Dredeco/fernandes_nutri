import Image from 'next/legacy/image'
import React from 'react'
import UserImage from './../../public/userq.jpg'

export default function 
() {
  return (
    <div id='about' className='about'>
        <h1>Sobre</h1>
        <div className='about-wrapper'>
          <Image 
              src={UserImage}
              width='300'
              height='300'
              layout='fixed'
              objectFit='cover'
            />
            <div className='info'>
                <h2>Isabella Fernandes</h2>
                <span>Nutricionista</span>
                <p>Nutricionista (CRN XXXXX), especializada em Nutrição e Medicina Vegetariana e Nutrição Comportamental. Possui milhares de casos de sucesso com pacientes atendidos tanto em consultório presencial e online. Atualmente, atuando exclusivamente no atendimento à distância.</p>
            </div>
        </div>
    </div>
  )
}