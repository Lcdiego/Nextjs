import Image from "next/image";
import img1 from '../public/cambg_5.jpg';
import img2 from '../public/cambg_6.jpg';
import img3 from '../public/cambg_7.jpg';

export default function Home() {
  return (
    <div className="flex flex-wrap max-w-6xl ml-[22%] mt-[20vh]">
      <div className="w-2/3 pr-4">
        <div id="default-carousel" className="relative" data-carousel="static">
          <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-[31rem]">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
              <Image src={img1} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="First slide" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image src={img2} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="Second slide" />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image src={img3} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="Third slide" />
            </div>
          </div>

          <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
          </div>

          <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="">
        <div className="flex  items-center justify-center">
          <div className="h-[25vh] relative flex w-full max-w-[22rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
           
            <div className="p-6">
              <h6 className="mb-2 block font-sans text-[0.8rem] font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                startups
              </h6>
              <h4 className="mb-1 block font-sans text-[0.7rem] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Lyft launching 
              </h4>
              <p className="mb-2 block font-sans text-[0.7rem] font-normal leading-relaxed text-gray-700 antialiased">
                Like so many 
              </p>
              <a className="inline-block" href="#">
                <button className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                  </svg>
                </button>
              </a>
            </div>
            <div className="relative m-0 w-[10vw] shrink-0 overflow-hidden rounded-xl  bg-white bg-clip-border text-gray-700">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="image" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
