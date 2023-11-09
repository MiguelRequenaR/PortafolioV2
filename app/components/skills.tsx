import React from 'react'

function Skills() {
  return (
    <div className='pb-32'>
        <h2 className='text-2xl text-center mt-20 font-black text-indigo-600'>Mis habilidades</h2>
        <div className='flex flex-wrap justify-center  gap-10 mt-10 border border-[#eeeeee] py-5 w-[40%] mx-auto shadow-2xl rounded-3xl transform hover:scale-110 transition-transform'>
            <img 
                src="/image/js.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
            <img 
                src="/image/ts.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
            <img 
                src="/image/react.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
            <img 
                src="/image/tcss.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
            <img 
                src="/image/ree.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
            <img 
                src="/image/f.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
            <img 
                src="/image/pho.png" 
                alt="skill"
                className="w-[35px] h-[35px] object-cover transform hover:scale-150 transition-transform" 
            />
        </div>
    </div>
  )
}

export default Skills