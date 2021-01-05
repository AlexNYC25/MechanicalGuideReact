import react from 'react';

export default function ProductPage(){
    const [dataFetched, setDataFetched] = react.useState(false);
    const [switchObject, setSwitchObject] = react.useState(null);

    const id = "5fe0bc0677b5db4a6dcce7a5"

    if(!dataFetched){
        fetch("https://mech-switches.herokuapp.com/switches/5fe0bc0677b5db4a6dcce7a5")
            .then(response => response.json())
            .then(data => setSwitchObject(data[0]))
            .then(setDataFetched(true))

        
       console.log(switchObject)
        
    }
    

    return(
       
        <div id="product-page" className="container">
            <div className="row align-items-start" style={{"color":"#E2C2C6"}}>
                <div className="col">
                    <img src="https://www.cherrymx.de/_Resources/Persistent/d4e5d661da4d28eb2c5d6321289c29ac2d6cbd56/img-productstage-mxRed%402x_100-368x368.png" className="img-fluid" />
                </div>
                <div className="col">
                    <table className="table table-dark" style={{"color":"#E2C2C6"}}>
                        <tbody>
                            <tr>
                                <th scope="col">
                                    Name
                                </th>
                                <td>
                                    {switchObject ? switchObject.name : "Loading" }
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">
                                    Type
                                </th>
                                <td>
                                    {switchObject ? switchObject.type : "Loading"}
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">
                                    Category
                                </th>
                                <td>
                                    {switchObject ? switchObject.category : "Loading"}
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">
                                    Actuation Force
                                </th>
                                <td>
                                    {switchObject ? switchObject.actuationForce +"g" : "Loading"}
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">
                                    Bottom-Out Force
                                </th>
                                <td>
                                    {switchObject ? switchObject.bottomForce+"g" : "Loading"}
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">
                                    Actuation Distance
                                </th>
                                <td>
                                    {switchObject ? switchObject.actuationDistance + "mm" : "Loading"}
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">
                                    Travel Distance
                                </th>
                                <td>
                                    {switchObject ? switchObject.travelDistance +"mm" : "Loading"}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="container border rounded border-dark" style={{"background-color": "black", "color": "#E2C2C6"}}>
                    <p>
                        Manufacture Description
                    </p>
                    <p>
                        The linear switching characteristic combined with the low spring resistance triggers directly. The CHERRY MX Red is the first choice for beginners in the world of mechanical keyboards. The smooth-running CHERRY MX technology enables balanced writing and gaming sessions.
                    </p>
                </div>
                

            </div>
        </div>
    )
}