import react from 'react';
import {Link} from 'react-router-dom'

export default function HomePage(){

    let testCardData = [
        {
            "id": "5fe0bc0677b5db4a6dcce7a",
            name: "Cherry MX Red",
            type: "Linear",
            category: "Standard", 
            main_image: "https://www.cherrymx.de/_Resources/Persistent/d4e5d661da4d28eb2c5d6321289c29ac2d6cbd56/img-productstage-mxRed%402x_100-368x368.png"
        },
        {
            "id": "5fe2d015ecc08f2aabc86a4d",
            name: "Cherry MX Blue",
            type: "Clicky",
            category: "Standard",
            main_image: "https://www.cherrymx.de/_Resources/Persistent/89939ccada33f1ce3c03693eacad1c8375a3b7e2/img-productstage-mxBlue%402x-368x368.png"
        }
    ]

    return (
        <div className="container" id="homepage" style={{"background-color": ""}}>
            <div className="row">
                {testCardData.map(item => {
                    return (
                        <div key={item.id} className="card col-3 rounded-1 p-4 m-3" style={{"background-color":"#532D67"}}>
                            <img src={item.main_image} className="card-img-top" alt={item.name} />
                            <div className="card-body rounded-2" style={{"background-color":"#634075"}}>
                                <p className="" > {item.name} <br /> {item.type}</p>
                            </div>
                            <button
                                className="btn btn-dark"
                            >
                                <Link to={"/switch/"+item.id} >Learn More</Link>
                            </button>
                        </div>)
                })}
            </div>
            
        </div>
    )

}