
function Projects() {
    return (
      <div className='bg-[#eeee] pt-32 pb-10' id="proyectos">
          <h2 className="text-center text-indigo-600 font-black text-2xl">Proyectos</h2>
          <div className="border-2 border-indigo-600 w-[120px] mx-auto mt-1"></div>
          <div className='grid grid-cols-2 mt-10 w-[60%] mx-auto bg-[#fff] p-10 rounded-xl shadow-xl'>
              <div className='text-center'>
                  <h2 className='text-[#353848] font-bold text-xl mb-3'>Página Marbella</h2>
                  <p>
                      Página web para la empresa constructora Marbella S.R.L.
                  </p>
                  <div className='mt-20'>
                      <h3 className='text-[#353848] font-bold mb-5'>Tecnologías usadas</h3>
                      <div className='flex justify-center gap-20'>
                          <img 
                              src="/image/js.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                          <img 
                              src="/image/react.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                          <img 
                              src="/image/tcss.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                      </div>
                  </div>
                  <div className="mt-4">
                      <h3 className="text-[#353848] font-bold">Visita el proyecto en GitHub</h3>
                      <a 
                          href="https://github.com/MiguelRequenaR/ConstrucMarbella"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <i className="ri-github-fill cursor-pointer text-3xl text-indigo-600"></i>
                      </a>
                  </div>
              </div>
              <div className='flex justify-center items-center'>
                  <img 
                      src="/image/project1.png" 
                      alt="projects"
                      className="w-[500px] h-[300px] object-cover rounded-xl shadow-xl" 
                  />
              </div>
          </div>
  
  
          <div className='grid grid-cols-2 mt-32 w-[60%] mx-auto bg-[#fff] p-10 rounded-xl shadow-xl'>
              <div className='flex justify-center items-center'>
                  <img 
                      src="/image/project2.png" 
                      alt="projects"
                      className="w-[600px] h-[270px] rounded-xl shadow-xl" 
                  />
              </div>
              <div className='text-center'>
                  <h2 className='text-[#353848] font-bold text-xl mb-3'>Dashboard Marbella</h2>
                  <p>
                      Sistema para la gestión de recursos tecnologicós de la empresa constructora Marbella S.R.L.
                  </p>
                  <div className='mt-20'>
                      <h3 className='text-[#353848] font-bold mb-5'>Tecnologías usadas</h3>
                      <div className='flex justify-center gap-10'>
                          <img 
                              src="/image/js.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                          <img 
                              src="/image/ts.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                          <img 
                              src="/image/react.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                          <img 
                              src="/image/tcss.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                          <img 
                              src="/image/ree.png" 
                              alt="skill"
                              className="w-[35px] h-[35px] object-cover" 
                          />
                      </div>
                  </div>
                  <div className="mt-4">
                      <h3 className="text-[#353848] font-bold">Visita el proyecto en GitHub</h3>
                      <a 
                          href="https://github.com/MiguelRequenaR/dashboardmarbella-remix"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <i className="ri-github-fill cursor-pointer text-3xl text-indigo-600"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Projects