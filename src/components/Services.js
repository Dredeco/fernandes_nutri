import React from 'react'

export default function Services() {
    const services = [
        {name: 'Nutrição a Domicílio', description: 'Orientação nutricional individualizada no conforto da sua casa.'},
        {name: 'Nutrição Funcional', description: 'Orientação nutricional para controle e tratamentos de doenças crônicas.'},
        {name: 'Nutrição Esportiva', description: 'Melhor desempenho e performance em sua modalidade esportiva.'},
        {name: 'Nutrição Online', description: 'Orientação nutricional para quem não tem tempo para consulta presencial.'},
        {name: 'Gestantes', description: 'Tenha uma gestação saudável e com qualidade, prevenindo complicações.'},
        {name: 'Vegetariana', description: 'Receba uma orientação nutricional vegetariana variada e balanceada.'},
        {name: 'Emagrecimento', description: 'Emagrecimento e manutenção de peso de forma saudável, promovendo a saúde.'},
    ]
  return (
    <div id='services'>
        <div className='container'>
        <h1>Serviços</h1>
        <ul className='services-cards'>
            {services.map((service) => (
                <li className='service-card'>
                    <h5>{service.name}</h5>
                    <div className='line'/>
                    <span>{service.description}</span>
                    <button href='#'>Saiba Mais</button>
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
