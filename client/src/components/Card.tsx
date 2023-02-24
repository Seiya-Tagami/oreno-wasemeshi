import React from 'react'

const Card = () => {
  return (
    <div className='w-[300px] h-[400px] flex flex-col bg-white rounded-xl overflow-hidden'>
      <img src="/img/wasemeshi_2.png" alt="" className='h-1/2 object-cover' />
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold'>図星</h2>
          <span className='bg-orange-400 p-2 rounded-2xl'>油そば</span>
        </div>
        <p className='text-xs'>平日〇時～・休日〇時～</p>
        <ul className='mt-2'>
          <li>・予算は1000円前後</li>
          <li>・本キャンから徒歩3分</li>
          <li>・個人的に結構好き</li>
        </ul>
      </div>
    </div>
  )
}

export default Card