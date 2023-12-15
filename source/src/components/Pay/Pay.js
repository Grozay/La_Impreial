import React from 'react';
import '../../css/Pay/Pay.css';
import { useState } from "react"
import {useNavigate, Navigate} from 'react-router-dom';
import Swal from 'sweetalert2' ;

function Pay({onAdd}) {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [year, setYear] = useState('');
  const [cvv, setCVV] = useState('');

  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorAddress, setErrorAddress] = useState('');
  const [errorCity, setErrorCity] = useState('');
  const [errorNameOnCard, setErrorNameOnCard] = useState('');
  const [errorCardNumber, setErrorCardNumber] = useState('');
  const [errormonth, setErrorMonth] = useState('');
  const [errorState, setErrorState] = useState('');
  const [errorZip, setErrorZip] = useState('');
  const [errorYear, setErrorYear] = useState('');
  const [errorCVV, setErrorCVV] = useState('');


  const homepage = useNavigate();
  const MainAlert = Swal.mixin({
    showConfirmButton: false,
    timer: 1000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  function handleVatlidation(e){ 
    e.preventDefault();
    if(!firstname){
        setErrorFirstName('Email is required');
    }
    else if(firstname){
        setErrorFirstName('');
    }
     if(!email){
      setErrorEmail('Email is required');
    }
    else if(email){
      setErrorEmail('');
    }
    if(!address){
      setErrorAddress('Address is required');
    }
    else if(address){
      setErrorAddress('');
    }
    if(!nameOnCard){
      setErrorNameOnCard('Name On Card is required');
    }
    else if(nameOnCard){
      setErrorNameOnCard('');
    }
    if(!city){
      setErrorCity('City is required');
    }
    else if(city){
      setErrorCity('');
    }
    if(!state){
      setErrorState('State is required');
    }
    else if(state){
      setErrorState('');
    }
    if(!zip){
      setErrorZip('Zip is required');
    }
    else if(zip){
      setErrorZip('');
    }
    if(!cardNumber){
      setErrorCardNumber('Card Number is required');
    }
    else if(cardNumber){
      setErrorCardNumber('');
    }
    if(!month){
      setErrorMonth('Month is required');
    }
    else if(month){
      setErrorMonth('');
    }
    if(!year){
      setErrorYear('Year is required');
    }
    else if(year){
      setErrorYear('');
    }
    if(!cvv){
    setErrorCVV('CVV is required');
    }
    else if(cvv){
      setErrorCVV('');{
        {
          // Display an error message
          MainAlert.fire({
            icon: 'success',
            timer: 1500,
            title: 'Thank You!!',
          });
          homepage('/products')

      }
    }
  }
    

    else{
        const newUser ={firstname,email , address,month , zip, state, year, city, nameOnCard, cardNumber, cvv};
        onAdd(newUser);
        setFirstName('');
        setEmail('');
        setAddress('');
        setMonth('');
        setZip('');
        setState('');
        setYear('');
        setCity('');
        setNameOnCard('');
        setCardNumber('');
        setCVV("");
       
      
      
    }
    
    
   
    
   
 
}







  return (
   

 


    <div className="rowPay" >
      <div className="col-75">
        <div className="containerPay">
          <form onSubmit={handleVatlidation}>

            <div className="rowPay">
              <div className="col-50">
                <h3>Billing Address</h3>
                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" value={firstname} onChange={(e)=> setFirstName(e.target.value)}  />
                <div className="Register_error">{errorFirstName}</div>
                <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}  />
                <div className="Register_error">{errorEmail}</div>
                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={address} onChange={(e)=> setAddress(e.target.value)}  />
                <div className="Register_error">{errorAddress}</div>
                <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="New York" value={city} onChange={(e)=> setCity(e.target.value)}  />
                <div className="Register_error">{errorCity}</div>

                <div className="rowPay">
                  <div className="col-50">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY" value={state}  onChange={(e)=> setState(e.target.value)} />
                    <div className="Register_error">{errorState}</div>
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001"  value={zip} onChange={(e)=> setZip(e.target.value)} />
                    <div className="Register_error">{errorZip}</div>
                  </div>
                </div>
              </div>

              <div className="col-50">
                <h3>Payment</h3>
                
                <label htmlFor="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="John More Doe" value={nameOnCard} onChange={(e)=> setNameOnCard(e.target.value)}  />
                <div className="Register_error">{errorNameOnCard}</div>
                <label htmlFor="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)}  />
                <div className="Register_error">{errorCardNumber}</div>
                <label htmlFor="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September" value={month} onChange={(e)=> setMonth(e.target.value)}  />
                <div className="Register_error">{errormonth}</div>


                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <i className="fa-brands fa-cc-visa" style={{ color: 'navy', fontSize: '3em' }}></i>
                  <i className="fa-brands fa-cc-mastercard" style={{ color: 'blue', fontSize: '3em' }}></i>
                  <i className="fa-brands fa-cc-mastercard" style={{ color: 'red', fontSize: '3em' }}></i>
                  <i className="fa-brands fa-cc-discover" style={{ color: 'orange', fontSize: '3em' }}></i>
                  <i className="fa-solid fa-piggy-bank" style={{ color: 'pink', fontSize: '3em' }}></i>
                </div>




                <div className="rowPay">
                  <div className="col-55">
                    <label htmlFor="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018" value={year} onChange={(e)=> setYear(e.target.value)}  />
                    <div className="Register_error">{errorYear}</div>
                  </div>
                  <div className="col-55">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" value={cvv} onChange={(e)=> setCVV(e.target.value)}  />
                    <div className="Register_error">{errorCVV}</div>
                  </div>
                </div>
              </div>

            </div>
            <input type="submit" value="Continue to checkout" className="btn" />
          </form>
        </div>
      </div>
    </div>








  );
}

export default Pay;
