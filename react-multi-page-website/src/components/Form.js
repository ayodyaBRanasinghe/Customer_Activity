import React,{useState} from "react";  //useState- for functional component
import axios from "axios";


export default function Form(){

    //add details by customer

    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email_address, setemail_address] = useState("");
    const [phone_number, setphone_number] = useState("");
    const [adults, setadults] = useState("");
    const [kids, setkids] = useState("");
    const [hotel, sethotel] = useState("");
    const [activity_name, setactivity_name] = useState("");
    const [check_in_date, setcheck_in_date] = useState("");
    const [check_out_date, setcheck_out_date] = useState("");
    const [nationality, setnationality] = useState("");

    function sendData(){
            
        const newActivity = {
            first_name,       //initialize the customer details according to a activity
            last_name,
            email_address,
            phone_number,
            adults,
            kids,
            hotel,
            activity_name,
            check_in_date,
            check_out_date,
            nationality
        }

        axios.post('http://localhost:8070/activity/add',newActivity).then(()=>{
            alert("Customer details added successfully");
            

        }).catch((err)=>{
            alert(err)
        })
    }


    return(

        <div className="container">
            <br/>
            <center>
            <h4><em><b><u>Enter Deatails</u></b></em></h4>
            <br/>
            </center>
            <form className="form" onSubmit={sendData}>
                <div class="form group">
                    <label for="first_name" class="form-label">first name</label>
                    <input type="text" class="form-control" id="inputfname" required placeholder="Enter first name" onChange={(e)=>{
                        setfirst_name(e.target.value);

                    }}/>
                    
                </div>
                <div class="form group">
                    <label for="last_name" class="form-label">last name</label>
                    <input type="text" class="form-control" id="inputlname" required placeholder="Enter last name" onChange={(e)=>{
                        setlast_name(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="email_address" class="form-label">email_address</label>
                    <input type="email" class="form-control" id="inputemailaddress" required placeholder="Enter email address" onChange={(e)=>{
                        setemail_address(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="phone_number" class="form-label">phone number</label>
                    <input type="number" class="form-control" id="inputphonenumber" required placeholder="Enter phone number"onChange={(e)=>{
                        setphone_number(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="adults" class="form-label">adults</label>
                    <input type="number" class="form-control" id="inputadults" placeholder="Enter adults"onChange={(e)=>{
                        setadults(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="kids" class="form-label">kids</label>
                    <input type="number" class="form-control" id="inputkids" placeholder="Enter kids" onChange={(e)=>{
                        setkids(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="hotel" class="form-label">hotel</label>
                    <input type="text" class="form-control" id="inputhotel" required placeholder="Enter hotel"onChange={(e)=>{
                        sethotel(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="activity_name" class="form-label">activity name</label>
                    <input type="text" class="form-control" id="inputactivity_name" required placeholder="Enter activity name" onChange={(e)=>{
                        setactivity_name(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="check_in_date" class="form-label">check in date</label>
                    <input type="date" class="form-control" id="inputcheckindate" required placeholder="Enter check in date"onChange={(e)=>{
                        setcheck_in_date(e.target.value);

                    }}/>
                    
                </div>


                <div class="form group">
                    <label for="check_out_date" class="form-label">check out date</label>
                    <input type="date" class="form-control" id="inputcheckoutdate" required placeholder="Enter check out date" onChange={(e)=>{
                        setcheck_out_date(e.target.value);

                    }}/>
                    
                </div>

                <div class="form group">
                    <label for="nationality" class="form-label">nationality</label>
                    <input type="text" class="form-control" id="inputnationality" required placeholder="Enter nationality"onChange={(e)=>{
                        setnationality(e.target.value);

                    }}/>
                    
                </div>

                <br/>
                
                <button type="submit" class="btn btn-primary">submit</button>
                </form>
        </div>

    )
                }
    
