// Imports of react
import React from "react";

const Stats = () => {
  return (
    <>
      <section className="h-screen">
        <div className="container px-5 pt-14 mx-auto">
          <div className="flex flex-wrap w-full mb-12 flex-col items-center text-center">
            <h1 className="heading-main text-center xl:text-[5vw] md:text-[5vw] sm:text-[10vw] sm:max-text-[7vw]">
              OUR <span className="span-feedback"> STATS</span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="card-border p-6 rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-red-500 mb-2">
                  <img
                    src="https://i.pinimg.com/236x/72/5c/6f/725c6fcec1f84ceaa28b0351aa5a98b6.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="card-border p-6 rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-red-500 mb-2">
                  <img
                    src="https://i.pinimg.com/236x/44/74/c8/4474c8b87b66334819ccd44cf36ce6bf.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="card-border p-6 rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-red-500 mb-2">
                  <img
                    src="https://i.pinimg.com/236x/b7/e0/7c/b7e07c5e1018d3e7411361ee7f3a23b5.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">Neptune</h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="card-border p-6 rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-red-500 mb-2">
                  <img
                    src="https://i.pinimg.com/236x/23/c9/6c/23c96c344b1a15f0ce2c8262e6c7b07b.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">Melanchole</h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="card-border p-6 rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-red-500 mb-2">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
                <h2 className="text-lg font-medium title-font mb-2">Bunker</h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="card-border p-6 rounded-lg">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-red-500 mb-2">
                  <img
                    src="https://i.pinimg.com/236x/38/b1/99/38b1993d2864ddd439b399bfd15913ac.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  Ramona Falls
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
