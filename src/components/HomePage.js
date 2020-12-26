import react from 'react';

export default function HomePage(){

    let testCardData = [
        {
            "id": 2232455645,
            name: "Cherry MX Red",
            type: "Linear",
            category: "Standard", 
            main_image: "https://www.cherrymx.de/_Resources/Persistent/d4e5d661da4d28eb2c5d6321289c29ac2d6cbd56/img-productstage-mxRed%402x_100-368x368.png"
        },
        {
            "id": 343567542345,
            name: "Cherry MX Blue",
            type: "Clicky",
            category: "Standard",
            main_image: "https://www.cherrymx.de/_Resources/Persistent/89939ccada33f1ce3c03693eacad1c8375a3b7e2/img-productstage-mxBlue%402x-368x368.png"
        }
    ]

    return (
        <div className="container" id="homepage">
            <div className="row">
                {testCardData.map(item => {
                    return (
                        <div className="card col-3 rounded-1" style={{"background-color":"#9C528B"}}>
                            <img src={item.main_image} className="card-img-top" alt={item.name} />
                            <div className="card-body rounded-2" style={{"background-color":"white"}}>
                                <p className="card-body rounded-1" > {item.name} <br /> {item.type}</p>
                            </div>
                        </div>)
                })}
            </div>
            
        </div>
    )

}