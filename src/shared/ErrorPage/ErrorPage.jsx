import Lottie from "lottie-react";
import error from '../../assets/BannerL&Logo/errorSign.json'

const ErrorPage = () => {
    return (
        <div className="flex h-[100dvh] pt-20    flex-col md:flex-row text-center md:text-center p-6 max-w-7xl gap-20 mx-auto justify-center items-center ">
            <section className=" ">
            <Lottie className="w-96 drop-shadow" animationData={error} loop={true} />
            </section>
            <section className=" " >
                <h1 className="text-7xl drop-shadow text-[#FF5733] font-bold"> 404 - Page Not Found</h1>

<p className='text-lg py-6 mb-8'>
We couldn't find the page you're looking for. It might be a typo in the URL, an outdated link, or the page may have been moved or deleted. Please check the URL for any mistakes or visit our homepage to navigate to the right place. If you continue to experience issues, feel free to contact our support team. We apologize for any inconvenience.
</p>
          

            </section>
            
            
        </div>
    );
};

export default ErrorPage;