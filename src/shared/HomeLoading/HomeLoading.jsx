import "./HomeLoading.css";
export default function HomeLoading() {
  return (
    <div className="w-full h-screen mx-auto bg-[#0F172A] flex flex-col justify-center items-center">
      <div className="container-loading">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              result="blur"
              stdDeviation="10"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
