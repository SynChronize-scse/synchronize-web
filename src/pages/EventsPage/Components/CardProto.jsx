import React from 'react'

const CardProto = () => {
    return (
        <div>
            <div className='size-fit p-1  border-2 border-blue-200 h-[330px] w-[250px] rounded-md flex flex-col items-center justify-between shadow-2xl'> 
                <div className='h-[650px] w-full bg-blue-200 rounded-md'></div>
                <h5 className='text-3xl mb-1 font-semibold z-10'>Events name</h5>
                <button className='py-1 px-4 mb-1 rounded-lg font-semibold text-slate-900 bg-orange-200  '>Click here</button>
            </div>
        </div>
    )
}

export default CardProto