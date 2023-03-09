import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Hero = () => {
  return (
    <section className='w-full h-[720px] bg-black-main flex justify-center'>
      <div className='w-[1400px] h-full flex justify-center items-center px-6 relative overflow-hidden'>
        <div className='flex gap-6 bg-red-accent z-10 p-8'>
          <h2 className='text-white md:text-6xl text-5xl font-extrabold leading-tight'>わせ<span className="text-black-main">飯</span>と<br />あなたの出会いに<br /><span className="text-black-main">祝</span>福を！</h2>
        </div>
        <div className="w-[480px] absolute top-5 left-20">
          <img src="/img/wasemeshi-hero_1.png" className="w-full object-contain" />
        </div>
        <div className="w-[480px] absolute bottom-5 right-20">
          <img src="/img/wasemeshi-hero_2.png" className="w-full object-contain" />
        </div>
        <a href='#search' className="flex justify-center items-center w-[200px] md:h-[180px] h-[140px]  bg-[#fff] rounded-full font-extrabold md:text-xl text-lg btn-circle-shadow hover:translate-y-1 cursor-pointer duration-75 absolute bottom-5 md:left-20 left-1/2 md:translate-x-0 -translate-x-1/2">
          <div className='flex flex-col items-center gap-4'>
            <span>さっそく<br />サービスを<br /> 試してみる</span>
            <ArrowDownwardIcon className='!md:text-6xl !text-3xl animate-promote-searching' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero