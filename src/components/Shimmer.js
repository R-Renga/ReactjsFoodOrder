
const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
        {Array(10).fill("").map((e,index) => 
          <div key={index} className="shadow-xl w-64 h-64 bg-gray-300 p-3 m-3"></div>
        )}
      </div>
    )
}


export default Shimmer;



