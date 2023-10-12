// Imports of react
import React,{ useState } from 'react'

// Function for razor-pay integration
const Razor = () => {
    const [amount, setamount] = useState(100);

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(amount === ""){
      alert("please enter amount");
      }else{
        var options = {
          key: "rzp_test_i5N2gwFjORpxQZ",
          key_secret:"qcdRUUWcABooj2mIAjILps56",
          amount: amount*100,
          currency:"INR",
          name:"Vibes Verse",
          description:"Buy us a coffee",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
          prefill: {
            name:"Vedansh Jain",
            email:"vedansh.code@gmail.com",
            contact:"7415889987"
          },
          notes:{
            address:"Razorpay Corporate office"
          },
          theme: {
            color:"#3399cc"
          }
        };
        var pay = new window.Razorpay(options);
        pay.open();
      }
    }
    return (
       <img className='cursor-pointer bg-white px-2 py-2 rounded-lg' onClick={handleSubmit} src="https://influencermarketinghub.com/wp-content/uploads/2021/04/BuyMeACoffee.png" width={250} alt="" />
    );
}

export default Razor