import React from 'react'
import {easeIn, motion} from "motion/react"

function Navbar() {
  return (
    <div className='w-11/12 mx-auto p-6 border-b-[0.1px] space-y-1 md:space-y-0 shadow-2xl rounded-4xl grid sm:grid-cols-1 md:grid-cols-3'>

        <div className=' mx-auto font-["Neue_Montreal"] tracking-widest text-white text-2xl'>
                Tube<span className='text-indigo-500'>light</span>

        </div>

        {/* TubeLight-Effect */}
        <div className=' relative pt-4 w-[50%] mx-auto md:w-full  bg-gray-950 rounded-tl-2xl rounded-tr-2xl perspective-[1000px]'>
            <div className='absolute inset-0 bg-white mt-6 rounded-bl-2xl rounded-br-2xl'></div>

            <div className='absolute mt-6 rounded-bl-2xl rounded-br-2xl inset-0 bg-white shadow-2xl blur-sm shadow-white'></div>

            <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, ease:easeIn, delay:0.3}}
                className=' absolute blur-[40px]
                bg-gradient-to-b from-0% to-indigo-950 -top-60
                [transform:rotateX(80deg)_scaleX(1.8)] light h-[45rem] left-1 md:left-16 w-[250px] bg-indigo-700'>

            </motion.div>

        </div>

        <div className=' pl-20 flex  '>
                {
                    ["Home", "Pricing", "Contact"].map((ele,index) => (
                        <div className='h-6 overflow-hidden'>
                            <motion.div 
                            initial={{y:0}}
                            whileHover={{y:"-50%",
                                duration:0.3,
                                    transition:[.33, 1, 0.68, 1]
                            }}
                            className='flex flex-col cursor-pointer'>
                                <motion.a className='text-white mr-16 tracking-widest font-["Neue_Montreal"] font-thin'
                                key={index}>{ele}</motion.a>

                                <motion.a className='text-indigo-500 mr-16 tracking-widest font-["Neue_Montreal"] font-thin'
                                key={index}>{ele}</motion.a>
                            </motion.div>
                        </div>
                    ))
                }

        </div>
        
    </div>
  )
}

export default Navbar