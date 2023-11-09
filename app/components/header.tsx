import React from 'react'

function Header() {
  return (
    <div>
        <nav className='bg-[#ffffff] flex justify-around items-center'>
            <h1 className='text-indigo-600 font-black text-2xl'>Miguel Angel</h1>
            <ul className='flex gap-10 py-5 text-[#353848] cursor-pointer font-semibold'>
                <li>
                    Inicio
                </li>
                <li>
                    <a href="#sobre-mi">                    
                        Sobre mi
                    </a>
                </li>
                <li>
                    <a href="#proyectos">
                        Proyectos
                    </a>
                </li>
                <li>
                    <a href="#contacto">
                        Contacto
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header