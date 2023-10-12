// Imports of react
import React from 'react'
// Importing components from folder structure
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
      <p className='text-center w-[80%]'>Winners who meet the eligibility criteria will receive swag kits and merchandise as rewards. Following the assessment of their achievements, these individuals will be entitled to enjoy the tangible benefits of their accomplishments. The delivery of such items serves as an incentive and recognition of their exceptional contributions or success. This process ensures that those who have excelled in various endeavors are duly acknowledged and rewarded with tokens of appreciation, fostering motivation and a sense of achievement within the community or organization.</p>
    </div>
    
    <Footer></Footer>
    </>
    
  )
}

export default SwagKit