import LavaAnimation from "../UI/LavaAnimation";
import dp from "../../Assets/dp.jpeg";
import "../../Styles/HomePageLoader.css";
import { useState, useEffect } from "react";

function Home() {
  const [showPic, setShowPic] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(
      () => {
        setShowPic(true);
      },
      4500,
      clearTimeout()
    );
    setTimeout(
      () => {
        setLoader(false);
      },
      4500,
      clearTimeout()
    );
  }, []);

  return (
    <>
      {loader && (
        <div className="loader herobody">
          <div className="load-text">
            <div className="loaded-text">&lt;</div>
            <div className="loading-text">DEVNIGMA /&gt;</div>
          </div>
        </div>
      )}
      <div className="w-full">
        <div>
          <div className="container px-6 m-auto md:px-12 lg:px-7">
            <div className="flex flex-wrap px-2 md:px-0">
              <div className="lg:w-6/12 py-12 lg:mt-16 lg:ml-0 md:ml-44 sm:ml-44 sm:justify-items-center">
                {showPic && (
                  <img
                    src={dp}
                    className="rounded-full lg:w-[350px] md:w-[300px] sm:w-[220px]"
                    alt="Display Img"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="ml-auto lg:w-6/12">
                <LavaAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
