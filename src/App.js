import React, { useRef } from 'react';
import Silk from './components/Silk'
import VanillaTilt from 'vanilla-tilt'
import Skills from './assets/Skills';
import Lottie from 'lottie-react'
import WebDevAnimation from './assets/WebDevAnimation.json'
import Coding from './assets/Coding.json'
import AppDev from './assets/AppDev.json'
import projects from './assets/projects';
import Iridescence from './components/Iridescence';
import coding from './assets/coding'
import ShinyText from './components/ShinyText';


export default function App() {

    const container = useRef()

    React.useEffect(()=>{
        const isMdScreen = window.innerWidth >= 768;

        if (isMdScreen) {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
            speed: 200,
            glare: true,
            "max-glare": 0.7,
        });
        }
    }, [])

    const moveTop  = ()=>{
        container.current?.scrollIntoView({ behavior: "smooth" });
    }
  
    return (
        <div className='border-x-[1.5rem] border-y-[0.5rem] md:border-x-[3rem] md:border-y-[1.5rem] border-black relative'>
            <div ref={container} />
            <div className='fixed h-[1.5rem] w-[100vw] top-0 left-0 bg-black z-10'></div>
            <svg
                className='fixed hidden md:block left-[10.1rem] md:left-[15.7rem] top-[1.4rem] md:top-[1.5rem] z-10'
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black" />
            </svg>
            <svg
                className='fixed left-[1.4rem] md:left-[3rem] top-[6.1rem] md:top-[7.6rem] z-10'
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black" />
            </svg>
            <svg
                className='fixed md:hidden right-[1.4rem] top-[6.1rem] z-10'
                width="40"
                height="40"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black" transform="rotate(90 15 15)"/>
            </svg>

            <div className='fixed w-full md:w-auto top-[1.4rem] left-[1.4rem] md:left-[3rem] bg-black rounded-br-[2rem] pt-2 md:pt-0 pe-5 pb-5 z-10 flex gap-3 select-none cursor-pointer' onClick={moveTop}>
                <img src='/images/Logo.png' className='w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem] object-contain' />
                <div className='flex flex-col justify-center'>
                    <div className='text-white text-md md:text-2xl'>Abhi</div>
                    <div className='text-white text-md md:text-2xl'>Vardhan</div>
                </div>
            </div>


            <div className='h-[94vh] w-full rounded-3xl overflow-hidden z-0 relative mt-4 md:mt-0' id='#'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#c28838"
                    noiseIntensity={1.5}
                    rotation={0}
                />
                <div className='hidden md:block absolute right-0 bottom-0 w-[20vw] pt-5 ps-5 bg-black rounded-tl-[2rem]'>
                    <iframe
                        style={{ borderRadius: '20px' }}
                        src="https://open.spotify.com/embed/playlist/63MH7anKlO6vYPSr23nGxt?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className='rounded-full'
                    ></iframe>
                </div>
                <svg
                    className='absolute hidden md:block right-0 bottom-[23.25rem] z-10'
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black" transform="rotate(180 20 20)"/>
                </svg>
                <svg
                    className='absolute right-[21.35rem] hidden bottom-0 z-10'
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="black" transform="rotate(180 20 20)"/>
                </svg>
            </div>


            <div className='min-h-[94vh] my-12 rounded-3xl w-full md:w-[70vw] mx-auto flex flex-col md:flex-row justify-center items-center gap-8 p-8'>
                <img src='/images/Me.jpg' className='w-60 md:w-1/3 rounded-2xl shadow-lg' />
                <div className='flex-1 text-left leading-relaxed blurText'>
                    <ShinyText text="I'm ABHI VARDHAN, a MERN stack developer passionate about building real-world solutions. I enjoy solving problems, exploring design, and constantly learning new tech." disabled={false} speed={3} className='custom-class text-xl md:text-5xl' />
                </div>
            </div>


            <div className='md:min-h-[94vh] py-[5rem] my-[3rem] bg-neutral-900 rounded-3xl flex flex-col justify-center items-center md:px-[10rem]'>
                <div className='text-white font-bold text-2xl md:text-[4rem] mb-8'>What am I good at ?</div>
                <div className='grid grid-cols-3 md:grid-cols-3 w-full'>
                {
                    Skills.map(skill=>(
                        <div className='md:p-3 flex flex-col rounded-3xl text-white tilt gap-3 m-4 w-auto items-center justify-center' key={skill}>
                            <i class={`${skill.value} text-white text-3xl md:text-4xl`}></i>
                            <div className='text-xs md:text-2xl'>{skill.name}</div>
                        </div> 
                    ))
                }

                </div>
            </div>

            <div className='h-[50vh] md:min-h-[94vh] text-white my-[3rem] gap-5 rounded-3xl flex flex-col justify-center items-center'>
                <div className='text-xl md:text-[6rem] font-bold flex items-center animateScroll'>
                    Web 
                    <span>
                        <Lottie 
                            animationData={WebDevAnimation} 
                            loop={true} 
                            className="w-16 h-12 md:w-48 md:h-36" />
                    </span> 
                    development
                </div>
                <div className='text-xl md:text-[6rem] font-bold flex items-center animateScroll'>
                    Competitive 
                    <span>
                        <Lottie 
                            animationData={Coding} 
                            loop={true} 
                            className="w-16 h-16 md:w-48 md:h-48" 
                        />
                    </span> 
                    programming
                </div>
                <div className='text-xl md:text-[6rem] font-bold flex items-center animateScroll'>
                    App 
                    <span>
                        <Lottie 
                            animationData={AppDev} 
                            loop={true} 
                            className="w-16 h-16 md:w-48 md:h-48 " />
                    </span>
                    development
                </div>
            </div>

            <div className='min-h-[97vh] px-5 py-10 my-[3rem] bg-neutral-900 text-white rounded-3xl flex flex-col justify-center items-center w-100'>
                <div className='text-2xl md:text-[4rem] font-bold md:mb-5'>My Projects</div>
                <div className="w-full flex flex-wrap justify-center gap-8 py-8">
                    {projects.map((project) => (
                    <div
                        key={project.title}
                        className="flex flex-col max-w-sm w-[320px] rounded-3xl bg-white/5 backdrop-blur-xl p-5 shadow-xl"
                    >
                        <div className="h-48 w-full rounded-2xl overflow-hidden mb-4">
                            <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-2 text-white">
                            <h2 className="text-lg md:text-2xl font-bold">{project.title}</h2>
                            <p className="opacity-80 text-sm md:text-base">{project.description}</p>
                        </div>

                        <div className="flex gap-3 mt-4">
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-xl border border-white/30 hover:bg-white hover:text-black transition"
                            >
                                Git Repo
                            </a>
                            <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded-xl border border-white/30 hover:bg-white hover:text-black transition"
                            >
                                Live
                            </a>
                        </div>
                    </div>
                    ))}
                </div>

            </div>

            <div className="md:h-[94vh] flex flex-col items-center select-none justify-center rounded-3xl bg-slate-400 p-8 gap-8 my-auto">
                <img src="/images/CC2.png" className="h-[30vh] md:h-[60vh] w-auto max-w-sm object-contain" alt="Laughter" />
                <div className="text-2xl md:text-5xl font-bold text-black text-center md:text-left w-auto">
                    A day without laughter is a day wasted.
                </div>
            </div>

            <div className='h-[80vh] md:h-screen text-white flex flex-col justify-center items-center gap-10'>
                <div className='flex flex-col items-center gap-5'>
                    <div className='text-2xl md:text-[4rem] font-bold md:mb-9'>My Coding Profiles</div>
                    <div className='flex justify-center items-center gap-5 select-none'>
                    {
                        coding.map(platform=>(
                            <a
                                href={platform.link}
                                target="_blank"
                                className="flex flex-col gap-4 justify-center items-center p-5 rounded-3xl tilt text-md"
                                key={platform.name}
                            >
                                {platform.icon}
                                <div className="text-sm md:text-xl">{platform.name}</div>
                            </a>
                        ))
                    }
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <div className='text-2xl md:text-[4rem] font-bold md:mb-10'>My Socials</div>
                    <div className='flex justify-center items-center gap-5 text-xl select-none'>
                        <a href='https://www.linkedin.com/in/abhi-vardhan09/' target='_blank' className='flex flex-col gap-4 justify-center items-center p-5 rounded-3xl tilt'>
                            <i class="devicon-linkedin-plain text-[3rem] md:text-[4.5rem]"></i>
                            <div className='text-xl'>LinkedIn</div>
                        </a>
                        <a href='https://github.com/AbhiVardhan020' target='_blank' className='flex flex-col gap-4 text-xl justify-center items-center p-5 rounded-3xl tilt'>
                            <i class="devicon-github-original text-[3rem] md:text-[4.5rem]"></i>
                            <div className='text-xl'>GitHub</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-[94vh] md:h-[93vh] rounded-3xl overflow-hidden relative mb-2">
                <Iridescence
                    color={[0.6, 0.4, 0.4]}
                    mouseReact={false}
                    amplitude={0.2}
                    speed={0.6}
                />
                <a className='absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-3 md:p-6 md:px-8 rounded-xl md:rounded-[4rem] text-lg md:text-4xl text-white select-none cursor-pointer border-2 md:border-4 border-slate-300 hover:bg-slate-300 hover:text-black transition duration-600 whitespace-nowrap' href='mailto:abhivardhangoud12345@gmail.com'>
                    Say Hello
                </a>
            </div>

        </div>
    );
}
