import React  from "react"
function Faculty () {
let Fac= [
    {
        "name": "Sam Johnston",
        "email": "Ollie.Tremblay24@gmail.com",
        "mobile": "870-807-7796",
        "city": "North Astridcester",
        "id": "1"
      },
      {
        "name": "Faith Harvey",
        "email": "Reanna_Gerlach@gmail.com",
        "mobile": "(365) 572-0944 x210",
        "city": "Downers Grove",
        "id": "2"
      },
      {
        "name": "Shari Witting",
        "email": "Mertie32@yahoo.com",
        "mobile": "1-315-322-0759 x225",
        "city": "Lowelltown",
        "id": "3"
      },
      {
        "name": "Opal Balistreri",
        "email": "Mervin_Johnson22@gmail.com",
        "mobile": "899.772.6773",
        "city": "Fort Toniworth",
        "id": "4"
      },
      {
        "name": "Minnie Schiller",
        "email": "Creola_Rice9@yahoo.com",
        "mobile": "255-491-8378 x6092",
        "city": "New Missouriborough",
        "id": "5"
      },
    

]



const namelist= Fac.map((Fac)=>{
    return (
   
        <tr >
            <td  >{Fac.name}</td>
            <td>{Fac.email}</td>
            <td>{Fac.mobile}</td> 
             <td>{Fac.city} </td>
             <td>{Fac.id}</td>
        </tr>
    )
 })



    return (
        <>
        <table border={2}>
       {namelist}

       </table>
       </>
    
    )
}

export default Faculty;