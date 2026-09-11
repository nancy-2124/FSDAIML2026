import React from "react";
import ICard from './ICard';
import pic from '../images/blue.jpeg'

function ICardGallery(){
    return(
        <div>
            {/* <ICard pic='https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/NissanIntelligentChoice/4-Website-Page-1500x664-241224.jpg.ximg.l_full_m.smart.jpg' roll="234" name="Ram" branch="AIML"/> */}
            <ICard pic={pic} roll="235" name="Rabiya" branch="CSE"/>
            <ICard/>
            <ICard/>
            <ICard/>

        </div>
    )
}
export default ICardGallery