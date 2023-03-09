const Hero = () => {
  return (
    <section className='w-full h-[720px] bg-black-main flex justify-center'>
      <div className='w-[1400px] h-full flex justify-center items-center gap-24 px-6 relative'>
        <h2 className='text-white md:text-6xl text-5xl font-extrabold leading-tight z-10'>わせ<span className="text-red-accent">飯</span>と<br />あなたの出会いに<br /><span className="text-red-accent">祝</span>福を！</h2>
        {/* <div className="lg:w-[900px] md:w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="/img/wasemeshi-hero.png" className="w-full object-contain" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero