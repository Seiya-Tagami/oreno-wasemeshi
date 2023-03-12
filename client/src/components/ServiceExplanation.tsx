import React from 'react'

import { wasemeshiIntroData } from '../utils/constants'

const ServiceExplanation = () => {
  return (
    <section className='w-full text-white bg-black-main flex justify-center'>
      <div className='w-[1400px] flex flex-col items-center gap-16'>
        <h2 className='md:text-[40px] text-[32px] font-bold bg-red-accent w-fit px-3 mt-20'>サービス概要</h2>
        <p className='w-2/3'>
          本サイトでは早稲田生に愛され続けられているわせ飯に特化した検索サービスとなっております。わせ飯に特化することで、普段の検索に伴う余計なわずらわしさを減らし、わせ飯に気軽に足が運ぶように心がけました。以下の検索欄から一度お試しください。<br />
          なお開発者はT氏のみであるために、わせ飯のデータは非常に少ない状況です。情報を提供していただける方はTwitterもしくはInstagramからＤＭでお願いしたします。
        </p>
        <div className='w-full flex justify-center gap-6 flex-wrap'>
          {wasemeshiIntroData.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.url} alt="" className='w-[300px] h-[200px] object-cover rounded-lg' />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceExplanation