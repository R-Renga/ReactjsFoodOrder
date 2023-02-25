
const Shimmer = () => {
    return (
        <div className="restaurent-cards">
        {Array(10).fill("").map((e,index) => 
          <div key={index} className="shimmer-text"></div>
        )}
      </div>
    )
}


export default Shimmer;



