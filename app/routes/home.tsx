import Skills from "~/components/skills"

function Home() {
  return (
    <div className="bg-[#eeeeee] pt-40">
        <div className="flex justify-around items-center">
            <div>
                <h1 className="text-[100px] font-bold text-indigo-600">Front-End <br />Developer</h1>
                <p className="mt-10 text-lg text-[#353848]">
                    Hola, soy <span className="text-indigo-600 font-black">Miguel Angel.</span><br />
                    Soy un apasionado Front-End Developer <br /> de Perú.
                </p>
                <div className="text-3xl text-indigo-600 mt-5">
                    <a 
                        href="https://www.linkedin.com/in/miguel-angel-requena-ramos-553b5b264/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-linkedin-box-fill mr-7 cursor-pointer"></i>
                    </a>
                    <a 
                        href="https://github.com/MiguelRequenaR"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-github-fill cursor-pointer"></i>
                    </a>
                </div>
            </div>
            <div>
                <img 
                    src="/image/perfilgithub.jpg" 
                    alt="foto de perfil"
                    className="rounded-full w-[300px] h-[300px] object-cover" 
                />
            </div>
        </div>
    <Skills />
    </div>
  )
}

export default Home