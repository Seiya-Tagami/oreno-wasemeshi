const NavBar = () => {
  return (
    <header className='w-full h-20 flex justify-center items-center bg-black-main text-white border-b border-gray-200'>
      <div className='w-[1400px] flex justify-between items-center'>
        <div className='flex items-center gap-7'>
          <h1 className='text-3xl font-bold'>俺のわせ飯</h1>
          <span>わせ飯検索サービス</span>
        </div>
        <span className='font-bold'>協賛：早稲田大学ぼっち飯部</span>
      </div>
    </header>
  )
}

export default NavBar