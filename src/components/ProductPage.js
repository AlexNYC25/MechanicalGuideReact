import react from 'react';

export default function ProductPage(){
    const [dataFetched, setDataFetched] = react.useState(false);
    const [switchObject, setSwitchObject] = react.useState(null);

    const id = "5fe0bc0677b5db4a6dcce7a5"

    if(!dataFetched){
        fetch("https://mech-switches.herokuapp.com/switches/" + id)
            .then(response => response.json())
            .then(data => setSwitchObject(data[0]))
            .then(setDataFetched(true))

        
       //console.log(switchObject)
        
    }
    

    return(

        <div id="product-page" className="container pt-4">
            <div className="row align-items-start" style={{"color":"#E2C2C6"}}>
                <div className="col">
                    <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {switchObject ? 
                            switchObject.images.map((item, i) => (
         
                                    i == 0
                                    ?
                                    <div className="carousel-item active">
                                        <img src={item} className="d-block w-100" alt="" />
                                    </div>
                                    :
                                    <div className="carousel-item ">
                                        <img src={item} className="d-block w-100" alt="" />
                                    </div>
                                
                            ))
                            : ""
                            }

                        </div>
                        <a class="carousel-control-prev" href="#productCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#productCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </a>
                    </div>
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
                            <tr>
                                <th scope="col">
                                    Spring Weights
                                </th>
                                <td>
                                    {
                                        switchObject
                                        ?
                                            switchObject.springWeight > 0
                                            ?
                                            switchObject.springWeight.map((item, i) => (
                                                item + ","
                                            ))
                                            : "Data Not available"
                                        : "Loading"
                                    }
                                    
                                </td>
                            </tr>
                                
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row pt-3">
                <div className="container border rounded-3 border-dark" style={{"background-color": "black", "color": "#E2C2C6"}}>
                    <p className="h3">
                        Manufacture Description
                    </p>
                    <p>
                        {switchObject ? switchObject.manufacturerDescription : "Loading"}
                    </p>
                </div>
                

            </div>
        </div>
    )
}