import img from '../../assets/BannerL&Logo/banner2.jpg'

const Banner = () => {
    return (
        <div className="hero mt-0   h-screen" >
            <img className='w-full h-full object-fill' src={img} alt="BANNER" />
     
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
