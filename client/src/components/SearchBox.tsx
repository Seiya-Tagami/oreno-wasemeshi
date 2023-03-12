import React from 'react'
import { Genre, Price, Restaurant } from './SearchMethods';

const SearchBox = ({ handleSet, searchMethod }) => {
  return (
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
  )
}

export default SearchBox