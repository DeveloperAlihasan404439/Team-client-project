import Lottie from 'lottie-react';
import loading from '../assets/BannerL&Logo/LOADING.json'
const Loader = () => {
    return (
        <div className='w-full flex justify-center'>
            <Lottie className=' h-[200px] md:h-[300px] ' animationData={loading} loop={true} />
        </div>
    );
};

export default Loader;