import { useState } from "react";

const Parishes = () => {

    const [Parishesdata, setParishesdata] = useState([
        {id : 1, image : "image" , churchcategory : "churchcatagory" , church_name : "name of church" , location : "vatakara" , about : "hi i am rahul"},
        {id : 1, image : "image" , churchcategory : "churchcatogary" , church_name : "name of churchs" , location : "nadapuram" , about : "hai i am vyshnav"},

    ]);
    return ( 
        <div className="Parishes-containor">
            { Parishesdata.map((data) => (
            <div className ="cards" key={data.id}>
                <div className="images">
                    {data.image}
                </div>
                <div className="catagory">
                        {data.churchcategory}
                </div>
                <div className="churchname">
                    {data.church_name}
                </div>
                <div className="location">
                    {data.location}
                </div>
                <div className="about">
                    {data.about}
                </div>
            </div>
            ))
            }
        </div>
     );
}
export default Parishes;