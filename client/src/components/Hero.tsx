const Hero = () => {
  return (
    <section className='w-full h-[720px] bg-black-main flex justify-center'>
      <div className='w-[1400px] h-full flex justify-center items-center gap-24'>
        <h2 className='text-white text-6xl font-bold leading-tight'>わせ<span className="text-red-accent">飯</span>と<br />あなたの出会いに<br /><span className="text-red-accent">祝</span>福を！</h2>
        <div className="w-[720px] h-[600px] relative">
          <div className="w-[600px] h-[500px] bg-red-accent absolute top-10 right-10"></div>
          <div className="absolute bottom-10 left-0 rotate-3">
            <div className="relative">
              <div className="w-36 h-10 bg-amber-400 absolute top-3 -right-11 rotate-45"></div>
              <div className="w-36 h-10 bg-amber-400 absolute top-3 -left-11 -rotate-45"></div>
              <img src="/img/wasemeshi-hero.png" className="w-[600px] object-contain bg-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero