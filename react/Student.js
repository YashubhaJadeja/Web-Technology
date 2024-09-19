import React  from "react"
function Student () {
let Stu= [
    {
        "name": "Fernando Morissette II",
        "email": "Cleta.Adams14@yahoo.com",
        "mobile": "363-801-7974 x568",
        "city": "Port Laura",
        "id": "6"
      },
      {
        "name": "Mrs. Lora Roob",
        "email": "Aileen.Wehner@gmail.com",
        "mobile": "1-361-551-6617",
        "city": "North Natalia",
        "id": "7"
      },
      {
        "name": "Julie Jast",
        "email": "Eliezer_Baumbach71@hotmail.com",
        "mobile": "(748) 718-8639 x905",
        "city": "Pasco",
        "id": "8"
      },
      {
        "name": "Ms. Rafael Hansen",
        "email": "Teagan.Boehm@hotmail.com",
        "mobile": "(725) 751-1599 x7215",
        "city": "McCulloughburgh",
        "id": "9"
      },
      {
        "name": "Marty Christiansen",
        "email": "Nadia73@yahoo.com",
        "mobile": "459.863.2528",
        "city": "East Taylor",
        "id": "10"
      },
    
]



const namelist= Stu.map((Stu)=>{
    return (
   
        <tr >
        <td  >{Stu.name}</td>
        <td>{Stu.email}</td>
        <td>{Stu.mobile}</td> 
         <td>{Stu.city} </td>
         <td>{Stu.id}</td>
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

export default Student;