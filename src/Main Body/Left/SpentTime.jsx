

const SpentTime = ({readingTime}) => {
    
    
    return (
        <div className="mt-[2rem] w-[23rem] mx-auto lg:mx-[2rem] text-center h-[5rem] bg-[#6047ec1a] rounded-lg border-2 border-[#6047EC] flex justify-center items-center">
            <h1 className="text-[#6047EC] text-2xl font-bold">Spent time on read : {readingTime} min</h1>
            
        </div>
    )
};

export default SpentTime;