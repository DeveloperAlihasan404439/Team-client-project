

const BestOutput = ({title, description}) => {
    return (
        <div className=" mt-4 text-left lg:border-r-2  lg:border-r-[#019D90] lg:pr-2">
            <h1 className="text-lg font-medium">
                {title}
            </h1>
            <p className="text-[14px] tracking-wide text-gray-600 py-1 " >
                {description}
            </p>
        </div>
    );
};

export default BestOutput;