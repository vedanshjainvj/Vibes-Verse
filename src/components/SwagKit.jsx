// Imports of react
import React from 'react'
// Importing components from folder structure
import Footer from "./Footer";

const SwagKit = () => {
  return (
    <>
    <section className="">
  <div className="container px-24 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="imgswag flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGDjQ_PO5uytvlr7ib5kjYeg_S111y8LTYMeXweW153igXLV4vIvk-MiohYj90hwmR28&usqp=CAU"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg">Amazon e-Gift Card</h2>
            <h3 className=" mb-3">4 Stars / 5</h3>
            <p className="mb-4">Get a chance to win amazon e-gift card by earning average star rating of 4.0 !</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="data:image/jpeg;base64,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"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg ">Boat Smart Watch</h2>
            <h3 className=" mb-3">4.2 Stars / 5</h3>
            <p className="mb-4">Get a chance to win boat smart watch by earning good star rating of 4.2 !</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlMyVxLaujGvb1RfO6KBur1TOuXPROc79suw&usqp=CAU"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg ">Boat Airpods</h2>
            <h3 className=" mb-3">4.4 Stars / 5</h3>
            <p className="mb-4">Get a chance to win boat airpodes by earning better star rating of 4.4 !</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-contain object-center sm:mb-0 mb-4" src="https://static.vecteezy.com/system/resources/thumbnails/024/822/743/small/the-headphones-ai-generated-transparent-png.png"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg ">Boat Headphone</h2>
            <h3 className=" mb-3">4.6+ Stars / 5</h3>
            <p className="mb-4">Get a chance to win boat headphones by earning best star rating of 4.6 !</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    <Footer></Footer>
    </>
    
  )
}

export default SwagKit