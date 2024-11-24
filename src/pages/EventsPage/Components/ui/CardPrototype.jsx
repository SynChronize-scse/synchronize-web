import React, { useState } from 'react'
import ImageCard from './ImageCard'
import bgImage from './image.png'
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function CardPrototype(props) {

    const {title, bkgImage, description} = props;
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='h-[330px] w-[250px]  text-slate-50 group'>
      {/* h-[330px] w-[250px] */}

        <ImageCard imgSrc={bkgImage ? bkgImage : bgImage}>
          <div className='ml-0'>
            <div className='absolute text-[1.7rem]/8 ml-9 uppercase text-bold bottom-5 group-hover:text-3xl group-hover:bottom-[3.7rem] transition-all duration-300'>
              {title ? title : 'Silly stuff'}
            </div>

            <div className='absolute text-white flex items-center justify-center -bottom-9  group-hover:bottom-[.9rem] transition-all duration-300'>
            <div className='mt-3 -mb-1 ml-9 flex justify-center '>
              <div className='border-2 w-fit border-slate-50 py-1.5 px-7 cursor-pointer rounded-xl hover:scale-[1.05] shadow-sm shadow-slate-50' onClick={() => setShowModal(true)}>
                View Details
              </div>
            </div>
            </div>
          </div>

        </ImageCard>

        {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} description={description} />,
                document.body
            )}

      </div>
    </>
  )
}




// const CardProto = () => {
//     return (
//         <div>
//             <div className='size-fit p-1  border-2 border-blue-200 h-[330px] w-[250px] rounded-md flex flex-col items-center justify-between shadow-2xl'> 
//                 <div className='h-[650px] w-full bg-blue-200 rounded-md'></div>
//                 <h5 className='text-3xl mb-1 font-semibold z-10'>Events name</h5>
//                 <button className='py-1 px-4 mb-1 rounded-lg font-semibold text-slate-900 bg-orange-200  '>Click here</button>
//             </div>
//         </div>
//     )
// }

// export default CardProto