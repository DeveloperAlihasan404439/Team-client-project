const ArticalCard = ({data}) => {
    const {img,title,description} = data
    return(
        <div>
             <div className="flex justify-between rounded-xl bg-white  items-center shadow-md border hover:border-l-2 hover:border-cyan-500 duration-200  p-4 h-44 font-inter gap-5">
                <div>
                    <h1 className="text-lg font-medium mb-2 hover:text-cyan-600 duration-150">{title}</h1>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
                <img className="w-60 h-max  rounded-xl" src={img} alt="" />
             </div>
        </div>
    )
};

export default ArticalCard;