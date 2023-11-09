
function About() {
    return (
      <div className="mb-32" id="sobre-mi">
          <h2 className="text-center text-indigo-600 mt-20 font-black text-2xl">Sobre mí</h2>
          <div className="border-2 border-indigo-600 w-[110px] mx-auto mt-1"></div>
          <div className="border mx-auto w-[900px] mt-10 border-[#ffff] shadow-xl rounded-xl relative">
              <img 
                  src="/image/perfilgithub.jpg" 
                  alt="imagen de perfil"
                  className="w-[150px] h-[150px] object-cover rounded-full absolute -top-14 left-0 right-0 ml-[820px]"
              />
              <h2 className="text-center text-[#353848] font-bold text-3xl mt-10">
                  Un entusiasta desarrollador Front-End de Perú
              </h2>
              <p className="mt-5 m-7 mb-10">
                  Soy estudiante de la facultad de Ingeniería de Sistemas, una persona apasionada y en constante aprendizaje de las nuevas tecnologías, tengo conocimientos en cuanto al diseño gráfico en programas como Adobe Photoshop, Adobe Ilustrator, y Figma. En cuanto al desarrollo Web, tengo conocimientos en tecnologías básicas como HTML, CSS y JS, TailwindCSS, y avanzadas como React, Vite, y Remix Run.
              </p>
          </div>
      </div>
    )
  }
  
  export default About