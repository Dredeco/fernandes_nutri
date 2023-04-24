import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export default function Footer() {
    function submit(e) {
        e.preventDefault()
      }
    
      return (
        <div id="footer">
            <div className='container'>
            <h1>Contato</h1>    
            <div className='contact_wrapper'>    
                <div className='contact_info'>
                    <FaPhone /><strong>Telefone:</strong><p>(22) XXXXX-XXXX</p>
                    <GrMail /><strong>E-mail:</strong><p>fernandesnutri@gmail.com</p>
                    <FaMapMarkerAlt /><strong>Localização:</strong><p>Rua Av. 28 de Março, nº000 - Sala 3</p>
                    <FaClock /><strong>Horário de Atendimento:</strong><p>De segunda a sexta, das 9h às 17h.</p>
                    <strong>Redes sociais</strong><p><a href='https://facebook.com' target='_blank'><FaFacebook /></a><a href='https://instagram.com' target='_blank'><FaInstagram /></a></p>
                </div>
    
                <div className='contact_map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.7540792799446!2d-41.3366344!3d-21.751057599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd44366230ad3%3A0xc6c455bc17445c8d!2sAv.%20Vinte%20e%20Oito%20de%20Mar%C3%A7o%2C%201%20-%20Parque%20Leopoldina%2C%20Campos%20dos%20Goytacazes%20-%20RJ%2C%2028020-740!5e0!3m2!1spt-BR!2sbr!4v1677247718542!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='footer-bar'>
                    <p>© 2023 | Todos os direitos reservados | Criação de Sites por: <a href='https://dredeco.github.io/portfolio-page/'>André Fernandes.</a></p>
                </div>
            </div>
            </div>
        </div>
    )
}
