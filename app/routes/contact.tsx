import React from 'react'

function Contact() {
  return (
    <div className='mt-32 mb-20' id='contacto'>
        <h2 className="text-center text-indigo-600 font-black text-2xl">Contacto</h2>
        <div className="border-2 border-indigo-600 w-[110px] mx-auto mt-1"></div>
        <div className='border mx-auto w-[500px] mt-10 border-[#fff] shadow-xl rounded-xl space-y-5'>
            <div className='flex items-center justify-center pt-7'>
                <i className="ri-phone-fill text-3xl text-indigo-600 mr-5"></i>
                968 518 002
            </div>
            <div className='flex items-center justify-center'> 
                <i className="ri-mail-fill text-3xl text-indigo-600 mr-5"></i>
                m.angelrequena20@gmail.com
            </div>
            <div className='flex items-center justify-center pb-7'>
                <a 
                    href="https://www.linkedin.com/in/miguel-angel-requena-ramos-553b5b264/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="ri-github-fill  text-3xl text-indigo-600 mr-5"></i>
                    Miguel Angel Requena Ramos
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact