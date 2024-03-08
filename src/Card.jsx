import Img1 from "./283441.png"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={Img1} alt="Profile Picture" />
            <h2 className="card-title">Kevin Code</h2>
            <p className="card-text">Kevin Shehan Perera</p>
        </div>
    )
}

export default Card