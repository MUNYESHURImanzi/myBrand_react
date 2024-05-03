
const PortfolioItem = ({ title, duration, description1,description2,description ,image}) => {
    return (
        <div className="portcont">
            <h2>{title}</h2>
            <p>{duration}</p>
            <div className="textp">
                
                <div className="pprar">
                <p>{description}</p>
                <p>{description1}</p>
                <p>{description2}</p>
                </div>
                <span className="yellow-icon">
                    <img src={image} alt="" srcSet=""  />
                </span>
            </div>
        </div>
    );
};


export default PortfolioItem;
