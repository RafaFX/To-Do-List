import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './Footer.css'

export const Footer = () => {

    return(
        <footer className='footer' >
                <div className='social-media'>
                    <a href='https://github.com/RafaFX' target='blank' ><AiFillGithub /></a> 
                    <a href='https://www.linkedin.com/in/rafael-lima-aba771208/' target='blank' ><AiFillLinkedin /></a>
                </div>

                <div className='logo-footer' >
                    <img src='/images/banner-logo.png' alt='Organo Logo' />
                </div>

                <div className='developer' >
                    <label>Desenvolvido por Rafael</label>
                </div>
        </footer>
    )

}

