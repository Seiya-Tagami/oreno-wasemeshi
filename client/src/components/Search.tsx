import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query';
import { Genre, Price, Restaurant } from './SearchMethods';
import newRequest from '../utils/newRequest';
import Card from './Card';
import { Wasemeshi } from '../types/wasemeshi';

// TODO ここらへん作りかえるべし、もしくはコンポーネント分割するか
const Search = () => {
  const [searchMethod, SetSearchMethod] = useState("");
  const handleSet = (method: string) => {
    SetSearchMethod(method);
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['wasemeshies'],
    queryFn: () =>
      newRequest.get(`/wasemeshi/`
      ).then((res) => {
        return res.data;
      })
  })

  return (
    <section>
      <div className='w-full h-[600px] flex justify-center bg-black-main'>
        <div className='w-[1400px] h-full flex flex-col items-center gap-16'>
          <h2 className='text-[40px] text-white font-bold bg-red-accent w-fit px-3 mt-20'>わせ飯検索</h2>
          <div className='w-2/3 bg-gray-100 p-7'>
            <div className='flex flex-col gap-4'>
              <span className='font-semibold'>1.検索方法を選択</span>
              <div className='flex gap-4'>
                <button className={`text-lg p-1 border-2 rounded-lg border-gray-button hover:bg-gray-button hover:-translate-y-1 duration-500 ${searchMethod === "genre" && 'bg-gray-button'}`} onClick={() => handleSet("genre")}>今食べたいジャンルから</button>
                <button className={`text-lg p-1 border-2 rounded-lg border-gray-button hover:bg-gray-button hover:-translate-y-1 duration-500 ${searchMethod === "price" && 'bg-gray-button'}`} onClick={() => handleSet("price")}>値段から</button>
                <button className={`text-lg p-1 border-2 rounded-lg border-gray-button hover:bg-gray-button hover:-translate-y-1 duration-500 ${searchMethod === "restaurant" && 'bg-gray-button'}`} onClick={() => handleSet("restaurant")}>店名から</button>
              </div>
              <span className='font-semibold'></span>
              <div className='flex'>
                {searchMethod ? (searchMethod === "genre" ? <Genre /> : searchMethod === "restaurant" ? <Restaurant /> : <Price />) : "1を選択すると表示されます。"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-red-accent flex justify-center p-32'>
        <div className='grid grid-cols-3 gap-12'>
          {isLoading ? "Loading" : error ? "Something went wrong!" : data.map((item: Wasemeshi) => (
            <Card data={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Search