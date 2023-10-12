import React from 'react'
import Footer from "./Footer";

const SwagKit = () => {
  return (
    <>
    <div className='h-[86vh] w-full flex flex-col justify-center items-center swags'>
      <h1 className='text-center text-[4vw] mb-10'>Swag <span className='span-feedback text-[4vw]'> Kit</span></h1>
      <div className='flex justify-center items-center gap-4'>
        <div className='swag-box p-8 rounded-xl'>
        <img src="https://www.boat-lifestyle.com/cdn/shop/articles/Website-stone-banner.jpg?v=1659088009" width={250} alt="" />
        </div>
        <div className='swag-box p-8 rounded-xl'>
        <img src="https://www.boat-lifestyle.com/cdn/shop/articles/Website-stone-banner.jpg?v=1659088009" width={250} alt="" />
        </div>
        <div className='swag-box p-8 rounded-xl'>
        <img src="https://www.boat-lifestyle.com/cdn/shop/articles/Website-stone-banner.jpg?v=1659088009" width={250} alt="" />
        </div>
        <div className='swag-box p-8 rounded-xl'>
        <img src="https://www.boat-lifestyle.com/cdn/shop/articles/Website-stone-banner.jpg?v=1659088009" width={250} alt="" />
        </div>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTnx3BymiQM_aHweS7semeKiRMPyyaI3lSQ&usqp=CAU" className='w-[15vw] py-10' alt="" />
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default SwagKit