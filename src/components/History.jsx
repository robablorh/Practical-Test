import {useSelector} from 'react-redux' 

import Navbar2 from "../components/Navbar2";



const History = () => {

const client = useSelector((store) => store.user.client);
console.log( client);


 






  return (

    <div>

<Navbar2 />

<table className="table">
  <thead>
    <tr>
   
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Marraige status</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Employment</th>
      <th scope="col">Employer</th>
      <th scope="col">ID Number</th>
      <th scope="col">Loan Amount</th>
      <th scope="col">Duration</th>
      <th scope="col">Interest</th>
      


     

    </tr>
  </thead>
  <tbody>
  
   
    {client.map((index)=>{
       
        return(<tr key={index}>
             <td>{index.firstname}</td>
                <td>{index.lastname}</td>
                <td>{index.dateofbirth}</td>
                <td>{index.maritalstatus}</td>
                <td>{index.address}</td>
                <td>{index.phone}</td>
                <td>{index.employment}</td>
                <td>{index.employer}</td>
                <td>{index.idnumber}</td>
                <td>{index.principal}</td>
                <td>{index.duration}</td>
                <td>{index.simpleInterest}</td>
               
       
        </tr>)
     
    })}
     

  
   
  </tbody>
</table>

    </div>
  )
}

export default History