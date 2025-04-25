import React from 'react'
import {easeIn, motion} from "motion/react"
import img1 from "../assets/party-popper.png"

function Hero() {
  return (
    <div className='w-11/12 mx-auto mt-10  font-["Neue_Montreal"] flex flex-col items-center relative'>
        <div className=' absolute inset-0 w-full h-full
        bg-[radial-gradient(#001b66_1px,transparent_1px)]
        [background-size:16px_16px]
        [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#fff_70%,trasnparent_100%)]'></div>

        {/* banner */}

        <div className='px-8 py-1  shadow-2xl flex  items-center gap-3 justify-center text-sm bg-amber-50 rounded-2xl z-10'>
           <div> Get upto <span className='text-indigo-700 font-bold'>30%</span> off</div>
           <div><img src={img1} height={20} width={20}/></div>
        </div>

        <div className='mt-10 z-10  font-semibold 
        '>
            <div className='select-none bg-gradient-to-b text-center text-5xl md:text-8xl from-amber-50 to-indigo-700
            bg-clip-text text-transparent'>
                Level up your Designs
            </div>

            <motion.div 
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.3, ease:easeIn, delay:0.4}}
            className='bg-clip-text select-none  text-transparent bg-gradient-to-b from-amber-50 to-zinc-700
            text-center md:mt-2 text-9xl font-bold'>
                100x
            </motion.div>

            <div className='text-center select-none mt-1 md:mt-2 text-sm md:text-lg  text-neutral-400 font-thin '>
                because building 10x ain't enough! so why not go <span>100x</span>
            </div>

            <div className='flex text-xl font-thin text-white gap-3 md:gap-10 items-center justify-center  mt-16'>
                <button className='md:px-6 px-4 py-2  font-bold text-sm md:text-lg bg-amber-50 text-indigo-900 rounded-3xl border'>
                    Get Started
                </button>

                <div className='relative inline-block font-[""]'>
                    <div className='bg-indigo-400  hover:bg-gradient-to-r
                     from-red-400 to-yellow-700 origin-left absolute 
                     inset-0 -z-10 hover:blur-2xl blur-md rounded-3xl'></div>
                    
                    <div className='md:px-8 px-6 z-20  
                     transition-all duration-300 
                    text-blackrelative bg-black py-3 text-sm md:text-lg rounded-3xl border'>
                        Go to the Pricing page
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero