import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Wasemeshi } from '../types/wasemeshi'

const Card: FC<{ data: Wasemeshi }> = ({ data }) => {
  const today = new Date();
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  // console.log(day)
  // console.log(hour)
  // console.log(minute)
  const [isRegularDayOff, setIsRegularDayOff] = useState(false);
  const checkRegularDay = async () => {
    const regularDayOffs = await data.regularDayOff;
    regularDayOffs.forEach(val => {
      if (val === day) {
        setIsRegularDayOff(true);
      } else {
        setIsRegularDayOff(false)
      }
    });
  }
  checkRegularDay();
  const isBusinessHours1 = data.openTime1 <= hour && hour <= data.closeTime1;
  const isBusinessHours2 = data.openTime2 <= hour && hour <= data.closeTime2;

  return (
    <div className='w-[300px] h-[400px] flex flex-col bg-white rounded-xl overflow-hidden'>
      <img src={data.image ? data.image : "/img/no_image.png"} alt="" className='h-1/2 object-cover' />
      <div className='p-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold'>{data.title}</h2>
          <span className="p-2 rounded-2xl" style={{ backgroundColor: `${data.themeColor}` }}>{data.category}</span>
        </div>
        {isRegularDayOff ?
          (
            <p className='text-sm font-bold text-red-500'>本日は定休日です。</p>
          ) :
          (
            isBusinessHours1 || isBusinessHours2 ?
              (<p className='text-sm font-bold text-emerald-400'>営業時間中です</p>) :
              (<p className='text-sm font-bold text-red-500'>営業時間外です</p>)
          )}
        <ul className='mt-2'>
          <li>・予算は{data.price}円前後</li>
          <li>・{data.timesToVisit}</li>
          <li>・{data.desc}</li>
        </ul>
        <Link to={"/"} className="block w-fit ml-auto text-red-accent">詳細を見る</Link>
      </div>
    </div>
  )
}

export default Card