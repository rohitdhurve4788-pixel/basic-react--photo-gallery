import React, { useState } from 'react'
import axios from "axios";
import { RefreshCcw } from "lucide-react";
const App = () => {
const [userimg, setuserimg] = useState([])

let random=Math.floor( (Math.random()*99+1))

// console.log(random);


let click= async()=>{
      const responce= await axios.get(`https://picsum.photos/v2/list?page=${random}&limit=12`)
      
      setuserimg(responce.data)
      
  // console.log(responce.data);



} 




  return (
    

    <div className='min-h-screen  w-full bg-rose-100'>
      {/* navbar */}
      <div className='py-4  px-6 border-b flex items-center justify-start ' >
        <img className='h-10 rounded-lg ' src="https://i.pinimg.com/236x/21/09/bf/2109bf4649d75a5f5e236a33d8c3f83a.jpg" alt="" />
        <h2 className='ml-5 text-3xl font-semibold'>Photo Gallery</h2>
      </div>
      <div className='flex justify-center items-center flex-col p-7'>
        <h1 className='text-5xl font-bold mb-4'>Photo Gallery</h1>
        <p className='text-2xl font-semibold text-gray-700 text-center' >Explore Beautyful Movement Around The World</p>
      </div>
 
    <div className='flex gap-5 flex-wrap p-5 justify-center w-full   items-center'>
            {userimg.map(function(e, idx){
                            const randomHeight = Math.floor(Math.random() * 200) + 200;


              return <div key={idx} className=' '>
          <img    
          style={{ height: `${randomHeight}px` }}
          className='w-100 rounded-md object-cover hover:scale-105 duration-300' src={e.download_url} alt="" />
          <h3 className='text-left'></h3>
          </div>
      })}
    </div>
              <div  className='flex justify-center items-center' >
                  <button   className='py-3 px-4 bg-[#6E39E8] flex gap-1.5 text-white font-bold rounded-sm cursor-pointer active:scale-98'
      onClick={click} >  <RefreshCcw /> Click To Generate Images</button>
              </div>
    </div>
    
  )
}

export default App