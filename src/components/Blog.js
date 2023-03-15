import Image from 'next/legacy/image'
import React from 'react'

import Image1 from '../../public/foodplate.jpg'
import Image2 from '../../public/womaneatingh.jpg'
import Image3 from '../../public/womaneatingv2.jpg'

export default function () {
    const posts = [
        {name: 'Alimentação saudável, qual a importância?', img: Image1},
        {name: 'As gorduras boas para sua dieta.', img: Image2},
        {name: 'Conheça os benefícios de incluir fibras na sua dieta.', img: Image3},
    ]
  return (
    <div id='blog'>
        <div className='blog-title'>
            <h1>Últimas publicações do Blog</h1>
            <p>Tenha um estilo de vida mais saudável, melhorando seus hábitos alimentares e conquistando mais qualidade de vida.</p>
        </div>
        <div className='blog-wrapper'>
            <ul className='blog-card'>
            {posts.map((post) => (
                <li>
                    <Image src={post.img} layout='responsive' width={300} height={300} objectFit='cover' className='card-image' />
                    <div>{post.name}</div>
                    <button>LER MATÉRIA</button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}
