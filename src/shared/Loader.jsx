import Lottie from 'lottie-react';
import loading from '../assets/BannerL&Logo/LOADING.json'
const Loader = () => {
    return (
        <div className='w-full flex justify-center'>
            <Lottie className=' h-[200px] md:h-[300px] lg:col-span-2 lg:row-span-2' animationData={loading} loop={true} />
        </div>
    );
};

export default Loader;