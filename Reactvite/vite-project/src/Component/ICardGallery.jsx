import React from "react";
import ICard from './ICard';
import pic from '../images/blue.jpeg'
import ImdbCard from './ImdbCard';

function ICardGallery(){
//     const student=
//     [                      //stores in array form
//         {
//         pic:pic,
//         roll:'456',
//         name:'Ram',
//         branch:'CSE-AIML'
//     },
//     {
//         pic:pic,
//         roll:'457',
//         name:'Ravi',
//         branch:'CSE-AIML'
//     },
//     {
//         pic:pic,
//         roll:'458',
//         name:'Ritin',
//         branch:'CSE-AIML'
//     },
//      {
//         pic:pic,
//         roll:'459',
//         name:'Ritvik',
//         branch:'CSE-AIML'
//     }
// ]

    const name=[
    {
        Name:'Spiderman'
    }

]
    return(
        <div style={{display:'flex'}}>
            {/* <ICard pic='https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/NissanIntelligentChoice/4-Website-Page-1500x664-241224.jpg.ximg.l_full_m.smart.jpg' roll="234" name="Ram" branch="AIML"/> */}
            {/* <ICard pic={pic} roll="235" name="Rabiya" branch="CSE"/>
            <ICard roll="236" name="Shiri" branch="AIML"/> */}
            {/* <ICard/>
            <ICard/> */}
            {/* <ICard data={student[0]}/>  get individual element */}
            {/* {
                student.map((ele)=>(
                    <ICard data={ele}/>
                ))
            } */}
            {
                name.map((ele)=>(
                    <ImdbCard data={ele}/>
                ))
            }

        </div>
    )
}
export default ICardGallery