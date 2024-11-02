import React from 'react'
import ImageCard from './ImageCard'
import bgImage from './image.png'

const CardDemo1 = () => {
  return (
    <>
      <div className='mt-20 h-20 w-18 text-slate-50 mb-[80vh] '>

        <ImageCard imgSrc={bgImage}>
          <div className='px-8'>
            <h3 className=' text-4xl uppercase text-bold'>DRONE RACE</h3>

            {/* <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, incidunt.</p> */}

            <div className='mt-3 -mb-1 flex justify-center'>
              <div className='border-2 w-fit border-slate-50 py-2 px-10 cursor-pointer rounded-xl hover:scale-[1.05] shadow-sm shadow-slate-50'>
                Click Here
              </div>
            </div>
          </div>

        </ImageCard>

      </div>
    </>
  )
}

export default CardDemo1