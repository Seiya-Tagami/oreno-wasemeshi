import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';

import newRequest from '../utils/newRequest';
import upload from '../utils/upload';
import { Category } from '../types/category';
import CloseIcon from '@mui/icons-material/Close';

const CreateWasemeshi = () => {
  // データベースからカテゴリーを取得
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      newRequest.get(`/category/`
      ).then((res) => {
        return res.data;
      })
  })

  // 以下フォームデータの取り扱い
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    themeColor: "",
    openTime1: "",
    closeTime1: "",
    openTime2: "",
    closeTime2: "",
    regularDayOff: "",
    price: "",
    timesToVisit: "",
    desc: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [addBusinessHours, setAddBusinessHours] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => {
      return {
        ...prev, [e.target.name]: e.target.value
      };
    })
    console.log(formData)
  };

  // カテゴリー用に別関数を用意
  const handleChange_categories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value, themeColor: e.target[e.target.selectedIndex].dataset.themecolor! }
    })
  }

  // 定休日用に別関数を用意
  const handleChange_regularDayOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      const prevData = [...prev.regularDayOff];
      const newData = prevData.indexOf(e.target.value) !== -1 ? prevData.filter((day) => day !== e.target.value) : [...prevData, e.target.value]
      return { ...prev, [e.target.name]: newData.sort() }
    })
  }

  const handleSet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const url = file ? await upload(file) : "";
    try {
      await newRequest.post("/wasemeshi/create", {
        ...formData,
        image: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  // TODO validation、error表示
  return (
    <section className='w-full bg-black-main flex justify-center'>
      <div className='mt-10 flex flex-col items-center gap-10'>
        <h2 className='text-[40px] text-white font-bold bg-red-accent w-fit px-3'>わせ飯データ登録</h2>
        <div className='w-[800px] bg-gray-100 p-14 flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>店舗名</label>
            <input type="text" name="title" className='h-10 flex-1 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange} />
          </div>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>画像</label>
            <input type="file" onChange={handleSet} />
          </div>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>カテゴリー</label>
            {isLoading ? "データ取得中" : error ? "問題が発生しました" : (
              <select name="category" id="" className='h-10 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange_categories}>
                <option value="">選択</option>
                {data.map((item: Category) => (
                  <option value={item.category} key={item._id} data-themecolor={item.themeColor}>{item.category}</option>
                ))}
              </select>
            )}
          </div>
          <div className='flex items-start gap-4'>
            <label htmlFor="" className='font-semibold'>営業時間</label>
            <div className='flex flex-col gap-2 items-start'>
              <span>
                <input type="number" name='openTime1' className='w-14 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange} />
                時から
                <input type="number" name='closeTime1' className='w-14 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange} />
                時まで
              </span>
              {!addBusinessHours && (<button onClick={() => setAddBusinessHours(true)} className="bg-green-600 text-xs text-white font-semibold p-1 rounded-md hover:bg-green-700 duration-200">営業時間を追加</button>)}
              {addBusinessHours &&
                (
                  <div className='flex gap-2'>
                    <span>
                      <input type="number" name='openTime2' className='w-14 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange} />
                      時から
                      <input type="number" name='closeTime2' className='w-14 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange} />
                      時まで
                    </span>
                    <button onClick={() => setAddBusinessHours(false)} title="削除">
                      <CloseIcon className='text-gray-400 text-xl hover:text-gray-500 duration-100'/>
                    </button>
                  </div>
                )}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>定休日</label>
            <div className='flex items-center gap-4'>
              <label htmlFor="1">
                <input type="checkbox" value={1} name="regularDayOff" id='1' onChange={handleChange_regularDayOff} />
                <span>月曜日</span>
              </label>
              <label htmlFor="2">
                <input type="checkbox" value={2} name="regularDayOff" id='2' onChange={handleChange_regularDayOff} />
                <span>火曜日</span>
              </label>
              <label htmlFor="3">
                <input type="checkbox" value={3} name="regularDayOff" id='3' onChange={handleChange_regularDayOff} />
                <span>水曜日</span>
              </label>
              <label htmlFor="4">
                <input type="checkbox" value={4} name="regularDayOff" id='4' onChange={handleChange_regularDayOff} />
                <span>木曜日</span>
              </label>
              <label htmlFor="5">
                <input type="checkbox" value={5} name="regularDayOff" id='5' onChange={handleChange_regularDayOff} />
                <span>金曜日</span>
              </label>
              <label htmlFor="6">
                <input type="checkbox" value={6} name="regularDayOff" id='6' onChange={handleChange_regularDayOff} />
                <span>土曜日</span>
              </label>
              <label htmlFor="0">
                <input type="checkbox" value={0} name="regularDayOff" id='0' onChange={handleChange_regularDayOff} />
                <span>日曜日</span>
              </label>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>予算</label>
            <span>
              平均
              <input type="number" name='price' className='w-20 bg-gray-300 px-3 py-1 rounded-md' onChange={handleChange} />
              円前後
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>道のり</label>
            <input type="text" name='timesToVisit' className='flex-1 bg-gray-300 px-3 py-1 rounded-md' placeholder='例:本キャンから徒歩3分' onChange={handleChange} />
          </div>
          <div className='flex items-center gap-4'>
            <label htmlFor="" className='font-semibold'>自由項目</label>
            <textarea name='desc' className='h-20 flex-1 bg-gray-300 p-3 rounded-md' onChange={handleChange} />
          </div>
          <button className='text-xl text-white font-semibold bg-red-accent p-3 rounded-md hover:bg-red-900 duration-300' onClick={handleSubmit}>登録</button>
        </div>
        <Link to={"/"} className="text-white p-3 hover:text-zinc-400">トップへ戻る</Link>
      </div>
    </section>
  )
}

export default CreateWasemeshi