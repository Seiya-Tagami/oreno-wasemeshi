import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className='w-full h-20 flex justify-center items-center bg-black-main text-white border-b border-gray-200'>
      <div className='w-[1400px] flex justify-between items-center px-6'>
        <div className='flex items-center gap-7'>
          <Link to="/" className='lg:text-3xl md:text-2xl text-xl font-bold '>俺のわせ飯</Link>
          <span className="md:text-[16px] text-[14px]">わせ飯検索サービス</span>
        </div>
      </div>
    </header>
  )
}

export default NavBar