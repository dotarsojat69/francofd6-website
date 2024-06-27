import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerate'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import TextEffect from './ui/TextEffect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36' id='about'>
      <div className=''>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>


      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.02] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>

    <div className='flex justify-center relative my-10 z-10'>
        <div className='max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <p className='text-center md:tracking-wider mb-4 text-sm md-text-lg lg:text-2xl'>
                Hi, I&apos;m <TextEffect />
            </p>
            <TextGenerateEffect
                className='text-justify text-[20px] md:text-xl lg:text-2xl'
                words='Dedicated and skilled Frontend Developer with experience designing and developing user friendly interfaces. Proficient in HTML, CSS, JavaScript, Typescript, and various frameworks. Proven track record of creating responsive websites and web applications. Seeking a challenging role where I can utilize my expertise to contribute to a dynamic team and make a meaningful impact.'
            />

            <a href="#projects">
                <MagicButton 
                title="Show my work"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>
    </div>
    </div>
  )
}

export default Hero
