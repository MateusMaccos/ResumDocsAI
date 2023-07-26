import React from 'react'
import {logoResum} from '../assets'

const Hero = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img src={logoResum} alt="logo_resum" className='w-28 object-contain'/>

                <button type='button' onClick={()=>window.open('https://github.com/MateusMaccos')} className='black_btn'>
                    Github
                </button>
            </nav>
            <h1 className='head_text'>Resumo de documentos com <br className='max-md:hidden'/>
            <span className='orange_gradient'>GPT-4</span>
             </h1>
             <h2 className='desc'>
                Simplique sua leitura com esse site, um open-source que resume textos longos em pequenos parágragos claros e coerentes.
             </h2>
        </header>
    )
}

export default Hero