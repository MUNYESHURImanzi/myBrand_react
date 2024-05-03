
import  Yellow from "../../assets/image/Vector (7).png"
const PortfolioItem = ({ title, duration, description }) => {
    return (
        <div className="portcont">
            <h2>{title}</h2>
            <p>{duration}</p>
            <div className="textp">
                <span className="yellow-icon">
                    <img src={Yellow} alt="" srcSet="" style={{ fontSize: '11px' }} />
                </span>
                <p>{description}</p>
            </div>
        </div>
    );
};


export default PortfolioItem;
