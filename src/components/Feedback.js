import React from 'react'
import Image from 'next/legacy/image'

import User1 from './../../public/pic1.jpg'
import User2 from './../../public/pic2.jpg'
import User3 from './../../public/pic3.jpg'

import Depo1 from './../../public/depo5.jpg'
import Depo2 from './../../public/depo2.jpg'
import Depo3 from './../../public/depo3.jpg'
import Depo4 from './../../public/depo4.jpg'

export default function Feedback() {
  let feedbacks = [
    {name: "Luana", comment: "Estou muito feliz com a minha dieta e com os resultados que tenho tido desde que comecei a trabalhar com você. Eu sinto que finalmente tenho controle sobre o que estou comendo e que estou fazendo escolhas mais saudáveis. Obrigado por sua orientação e incentivo!", image: User1},
    {name: "Mariana", comment: "Quero agradecer a você por ser tão atenciosa e receptiva às minhas necessidades e restrições alimentares. Eu sei que pode ser difícil para algumas pessoas lidar com alergias e intolerâncias alimentares, mas você sempre me deu opções deliciosas e nutritivas que atendem às minhas necessidades. Estou muito grato por ter encontrado uma nutricionista tão compreensiva e experiente", image: User2},
    {name: "Regina", comment: "Eu só queria dizer que você é uma ótima nutricionista e eu estou muito feliz em trabalhar com você. Você não só tem uma grande quantidade de conhecimento e experiência na área, mas também é muito gentil, encorajadora e motivadora. Eu sinto que tenho uma verdadeira aliada em minha jornada de saúde e bem-estar, e estou ansioso para continuar aprendendo com você!", image: User3}
  ]
  return (
    <div id='feedback' className='feedback'>
      <h1>Depoimentos</h1>
      <div className='fb-container'>
        <ul className='fb-grid'>
          {feedbacks.map((feedback) => (
            <li key={feedback.name} className='fb-card'>
              <Image 
                src={feedback.image}
                width={100}
                height={100}
                objectFit='cover'
              />
              <h4>{feedback.name}</h4>
              <span>"{feedback.comment}"</span>
            </li>
          ))}
        </ul>

        <div className='results'>
              <div className='depoiments'>
                <Image src={Depo1} alt='/'/>
                <Image src={Depo2} alt='/'/>
                <Image src={Depo3} alt='/'/>
                <Image src={Depo4} alt='/'/>
              </div>
        </div>
      </div>
    </div>
  )
}
