import Image from 'next/legacy/image'
import React from 'react'
import Image1 from '../../public/womaneatingv.jpg'

export default function CallToAction() {
    const items = [
        {id: '1', name: 'Anamnese', description: 'questionário de anamnese para avaliação de hábitos, horários, restrições e preferências alimentares, entre outros fatores.'},
        {id: '2', name: 'Consulta', description: 'avaliação de resultados de exames laboratoriais, exame de bioimpedância e análise de práticas e costumes alimentares.'},
        {id: '3', name: 'Plano Nutricional', description: 'elaboramos o plano nutricional de acordo com as necessidades do paciente em até uma semana após a consulta.'},
    ]
  return (
    <div id='calltoaction' className=''>
        <div className='container'>
            <div className='bg-image' />
            <div className='cta-box'>
                <h5>Alcance seus objetivos</h5>
                <ul className='cta-box-items'>
                {items.map((item) => (
                    <li className='items-wrapper'>
                        <span>{item.id}</span>
                        <p><strong>{item.name}:</strong> {item.description}</p>
                    </li>
                ))}
                </ul>
                <button>Entre em contato!</button>
            </div>
        </div>
    </div>
  )
}
