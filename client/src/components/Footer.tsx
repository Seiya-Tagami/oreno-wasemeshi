import { Link } from "react-router-dom"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// 今は簡易的だがこれで。
const Footer = () => {
  return (
    <footer className='w-full h-[300px] bg-black-main border-t border-gray-200  p-8 flex gap-36'>
      <div className="h-full flex flex-col justify-between items-start gap-2 text-white">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-semibold">俺のわせ飯</h2>
          <span>わせ飯とあなたの出会いに祝福を！</span>
        </div>
        <small className='text-white '>©2022-2023 Seiya<span className='text-orange-400'>C</span>ode</small>
      </div>
      <div className="flex gap-16">
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-xl font-semibold">協賛・支援等</h3>
          <ul className="flex flex-col gap-2">
            <li>早稲田大学ぼっち飯部</li>
            <li>早稲田大学マイルストーン2022</li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-xl font-semibold">各種SNS</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to={"https://twitter.com/jh14228yk?s=20"}>Twitter<OpenInNewIcon className="ml-1" /></Link></li>
            <li><Link to={"/"}>Instagram<OpenInNewIcon className="ml-1" /></Link></li>
          </ul>
        </div>
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-xl font-semibold">その他情報</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/create"}>管理者の方はこちらから</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer