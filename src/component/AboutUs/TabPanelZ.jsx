

const TabPanelZ = ({img,Description,small}) => {
    return (
        <div  className="lg:flex gap-8 p-4 w-full">
        <img className=" lg:w-[40%] h-80 py-4 lg:py-0 rounded-xl " src={img} alt="" />
        <div className="lg:w-[60%] text-lg">
        <h2 className="py-1">{Description}</h2>
        <h3 className="py-1">{small}</h3>
        </div>
       
        </div>
    );
};

export default TabPanelZ;