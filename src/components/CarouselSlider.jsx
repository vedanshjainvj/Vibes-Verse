import Carousel from 'react-bootstrap/Carousel';
import test1 from '../assets/test1.png'

function CarouselSlider() {
  return (
    <>
    <div className='h-screen w-full'>
    <h1 className='text-center text-[5vw] mt-8 mb-12'>TESTIMONIALS <span className='span-feedback text-[5vw]'>FEEDBACK</span></h1>
    <Carousel className='carousel-container flex justify-center items-center mb-10'>
      <Carousel.Item interval={2000}>
      <div className="d-flex justify-content-center align-items-center m-4 ">
          <img className='champ rounded-xl'
            src={test1}
            width={700}
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <div className="d-flex justify-content-center align-items-center m-4">
          <img className='champ rounded-xl'
           src={test1}
            width={700}
            alt=""
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="d-flex justify-content-center align-items-center m-4">
          <img className='champ rounded-xl'
            src={test1}
            width={700}
            alt=""
          />
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default CarouselSlider;