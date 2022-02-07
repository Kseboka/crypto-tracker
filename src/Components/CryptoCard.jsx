import react from "react";
import "../Styles/crypto-card.css";

function CryptoCard(props){
    return (
        <a href={props.link} target="_blank">
        <div className="card">
            <div className="card-header">
                <img src={props.icon}/>
                <h2>{props.name}</h2>  
            </div>
            <div className="card-info">
                <h3>Price</h3>
                <h3>${props.price}</h3>
                <h3>{props.rank}</h3>
            </div>  
        </div>
        </a>
    )
}

export default CryptoCard;