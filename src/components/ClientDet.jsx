
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";


import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { addClient } from "../redux/userSlice"


const ClientDet = () => {

  const [clientinfo, setClientinfo] = useState({
    firstname: "",
    lastname: "",
    dateofbirth: "",
    maritalstatus: "",
    address: "",
    phone: "",
    employment: "",
    employer: "",
    identification: "",
    idnumber: "",
    principal:"",
    duration: "",
    simpleInterest: 0,
    amount: 0,
    
});

const [, , removeCookie] = useCookies(["token"]);
const [errors, setErrors] = useState({});
const [messg, setMessg] = useState("");




const dispatch = useDispatch();
const navigate = useNavigate()

const logout = () => {
  removeCookie("token");
  navigate("/login");
}

const [showForm, setShowForm] = useState(false);

const handleYesClick = () => {
  setShowForm(true);
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setClientinfo((prev) => ({
        ...prev,
       [name]: value,
    }));
};

const validateForm = () => {
    const newErrors = {};
    if (!clientinfo.firstname) {
        newErrors.firstname = " firstname is required";
    }
    if (!clientinfo.lastname) {
        newErrors.lastname = "lastname is required";
    }
    if (!clientinfo.dateofbirth) {
        newErrors.dateofbirth = "dateofbirth feild is required";
    }
    if (!clientinfo.maritalstatus) {
        newErrors.maritalstatus = "maritalstatus is required";
    }
    if (!clientinfo.address) {
        newErrors.address = "addressis required";
    }

    if (!clientinfo.phone) {
        newErrors.phone = "phone is required";
    }

    if (!clientinfo.employment) {
        newErrors.employment = "employment is required";
    }

      if (!clientinfo.employer) {
        newErrors.employer = "employer is required";
    }

      if (!clientinfo.identification) {
        newErrors.identification = "identification is required";
    }
      if (!clientinfo.idnumber) {
        newErrors.idnumber= "idnumber is required";
    }
    if (!clientinfo.principal) {
      newErrors.principal = "principal is required";
  }
  if (!clientinfo.duration) {
    newErrors.duration = "duration is required";
}


return newErrors;
};



const calculateSimpleInterest = () => {

if (clientinfo.duration === "THREE MONTHS"){
    const principal = parseFloat(clientinfo.principal);
  const rate = 5;
  const time = 1; 
  const simpleInterest = (principal * rate * time) / 100*4;
  setClientinfo((prev) => ({
    ...prev,
    simpleInterest,
  }));

  }else if( clientinfo.duration === "SIX MONTHS"){
    const principal = parseFloat(clientinfo.principal);
    const rate = 5;
    const time = 1; 
    const simpleInterest = (principal * rate * time) / 100*6;
    setClientinfo((prev) => ({
      ...prev,
      simpleInterest,
    }));
   
   }else if( clientinfo.duration === "ONE YEAR"){
    const principal = parseFloat(clientinfo.principal);
    const rate = 5;
    const time = 1; 
    const simpleInterest = (principal * rate * time) / 100;
    setClientinfo((prev) => ({
      ...prev,
      simpleInterest,
    }));
   
  }}
   

  const totalAmount =()=>{
    const amount = (clientinfo.simpleInterest)+(clientinfo.principal)
    setClientinfo((prev)=>({
    ...prev, amount


    }))

    console.log(amount)
  }



 
const handleSubmit = (e) => {
  e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      console.log("Dispatching clientinfo:", clientinfo);
  //  no errors, dispatch the data to Redux store
        dispatch(addClient(clientinfo));
        setClientinfo({
        firstname: "",
        lastname: "",
        dateofbirth: "",
        maritalstatus: "",
        address: "",
        phone: "",
        employment: "",
        employer: "",
        identification: "",
        idnumber: "",
        principal:"",
        duration: "",
        simpleInterest:"",
       
        });
        
    } else {
 //  update the state to display errors
    setMessg("Fields are required");
    setErrors(newErrors);
    }
};
 








  return (
    <>
      <Navbar2 />

      

      <div className="w-50 m-auto pt-4 mt-4">
        <div
          className="btn-group w-100"
          role="group"
          aria-label="Button group with 4 buttons"
        >
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#007bff", padding: "1.5rem" }}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#0069d9", padding: "1.5rem" }}
          >
            Apply for loan
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#0062cc", padding: "1.5rem" }}
          >
            Get Approved
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#005cbf", padding: "1.5rem" }}
          >
            Recieve Deposit
          </button>
        </div>
        <Container className="flex justify-content-center align-items-center mt-3">
          <Row className="row1">
            <h3 className="text-center">REGISTER TO START YOUR LOAN AQUISITION PROCESS</h3>
          </Row>
          <Row className="row2">
            <p className="text-center">
              Dear applicant kindly start  by filling out this form  below.
              Please note that you can not get a loan without fufilling all the necessary requirement.</p>
             
             
          </Row>
          <Row className="row5 ms-2 pe-0" style={{ width: "100%" }}>
            <h2 className="text-white"> Get Started</h2>
          </Row>
          <Row className="row3 ms-2" style={{ width: "100%" }}>
            <Col>
              <p className="prow">Do you want to continue ?</p>
            </Col>
            <Col className="p-4 d-flex justify-content-end">
              <button
                className="btn btn-success me-3 ps-5 pe-5 text-center box"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                 onClick={logout}
                className="btn btn-danger ps-5 pe-5 text-center box"
              >
                No
              </button>
            </Col>
          </Row>

          {showForm && (<div>
            <Row className="row4 ms-2" style={{ width: "100%",  height:"100%"}}>


          <form  className="form-inline"  onSubmit={handleSubmit}>
                <h5>Client Personal information</h5>

                <div className ="firstlastname">
                    <div >
                       <label>First Name</label><br />
                       <input
                            type="text"
                            name="firstname"
                            value={clientinfo.firstname}
                            onChange={handleChange}
                            required
                       />
                       {errors.firstname && <div className="error">{errors.firstname}</div>}
                    </div> &nbsp; &nbsp;&nbsp;

                <div>
                       <label>Last Name</label><br />
                       <input
                            type="text"
                            name="lastname"
                            value={clientinfo.lastname}
                            onChange={handleChange}
                            required
                       />
                       {errors.lastname && <div className="error">{errors.lastname}</div>}
                </div>
        </div>

                       <label>Date of birth</label>
                       <input
                            type="date"
                            name="dateofbirth"
                            value={clientinfo.dateofbirth}
                            onChange={handleChange}
                            required
                      /> &nbsp; &nbsp;&nbsp;

                      <label>Marital Status</label>
                      &nbsp; &nbsp;&nbsp;
                      <input
                            type="radio"
                            name="maritalstatus"
                            value="Married"
                            onChange={handleChange}
                            required
                      /> 
                      <label htmlFor="married">Married</label> &nbsp; &nbsp;&nbsp;

                      <input
                           type="radio"
                           name="maritalstatus"
                           value="Single"
                           onChange={handleChange}
                           required
                      />

                      <label htmlFor="single">Single</label><br />
                       {errors.maritalstatus && ( <div className="error">{errors.maritalstatus}</div> )}
                       <hr />
                <h5>Client Contact information</h5>

                      <label>Address</label>
                      <input
                           type="text"
                           name="address"
                           value={clientinfo.address}
                           onChange={handleChange}
                           required
                      />
                       {errors.address && <div className="error">{errors.address}</div>}
                       &nbsp; &nbsp;&nbsp;
                       <label>Phone number</label>
                       <input
                           type="number"
                           name="phone"
                           value={clientinfo.phone}
                           onChange={handleChange}
                           required
                      />
                        {errors.phone && <div className="error">{errors.phone}</div>}<hr/>

                <h5>Employment Information</h5>

                       <label className="employment">Employment Status</label>
                       &nbsp; &nbsp;&nbsp;
                       <input
                           type="radio"
                           name="employment"
                           value="Employed"
                           onChange={handleChange}
                           required
                        /> 
                       <label htmlFor="employed">Employed</label> &nbsp; &nbsp;&nbsp;
                       <input
                           type="radio"
                           name="employment"
                           value="Unemployed"
                           onChange={handleChange}
                           required
                        />
                      <label htmlFor="unemployed">Unemployed</label> <br />
                        {errors.employment && <div className="error">{errors.employment}</div>}

                      <label className="employment">Name of Employer</label>
                      <input
                           type="text"
                           name="employer"
                           value={clientinfo.employer}
                           onChange={handleChange}
                           required
                        />
                         {errors.employer && <div className="error">{errors.employer}</div>}
                       <hr/>
                <h5>National Identification</h5>
                      <label>National Identification</label>
                      <select
                           onChange={handleChange}
                           name="identification"
                           value={clientinfo.identification}
                           required
                         >
                      <option value="" disabled>
                            Select
                      </option>
                      <option value="ECOWAS IDENTITY CARD">ECOWAS Identification Card</option>
            
                      </select>
                      {errors.identification && (<div className="error">{errors.identification}</div>)}
                     
                      &nbsp; &nbsp;&nbsp;
                      <label>ID number</label>
                      <input
                            type="text"
                            name="idnumber"
                            value={clientinfo.idnumber}
                            onChange={handleChange}
                            required
                        />
                         {errors.idnumber && <div className="error">{errors.idnumber}</div>} <br/>
                       <hr />
                   

       

        

          <h5>loan application</h5>

               <label className="loan">loan amount</label>&nbsp; &nbsp;&nbsp;
              GHS <input type="text"  value={clientinfo.principal}  name="principal"  onChange={handleChange} />
              &nbsp; &nbsp;&nbsp;
              <label>Duration</label> 
              <select
                name="duration"
                value={clientinfo.duration}
                onChange={handleChange}
                required
                className=""
              >
                <option value="" disabled>
                  Select Duration
                </option>
                <option value="THREE MONTHS">Three Months</option>
                <option value="SIX MONTHS">Six Months</option>
                <option value="ONE YEAR">One Year</option>
              </select>  &nbsp; &nbsp;&nbsp;
              
            <Button  className="btnpremium w-25 mx-auto" onMouseover={totalAmount} onClick={calculateSimpleInterest} size="lg">
             Click to calculate interest
            </Button>
             
          
            
           
            {clientinfo.principal && <Row className="rowC4"><p className="text-danger">Ghs {clientinfo.simpleInterest}</p></Row>}

            
            <input className="subbbtn" type="submit" value="Save" />
          
         </form> 
         </Row>
        
     
        
         
          </div>
          )}
          
       </Container>
     </div>
    












      

     
    </>
  );
};

export default ClientDet;
