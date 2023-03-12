import React, { useState, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../utils/newRequest';
import Card from './Card';
import { Wasemeshi } from '../types/wasemeshi';
import SearchBox from './SearchBox';

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
    <section id='search'>
      <div className='w-full h-[600px] flex justify-center bg-black-main'>
        <div className='w-[1400px] h-full flex flex-col items-center gap-16'>
          <h2 className='md:text-[40px] text-[32px] text-white font-bold bg-red-accent w-fit px-3 mt-20'>わせ飯検索</h2>
          <SearchBox searchMethod={searchMethod} handleSet={handleSet}/>
        </div>
      </div>
      <div className='w-full bg-red-accent flex justify-center p-32'>
        <div className='grid  lg:grid-cols-3 md:grid-cols-2 gap-12'>
          {isLoading ? "Loading" : error ? "Something went wrong!" : data.map((item: Wasemeshi) => (
            <Card data={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Search