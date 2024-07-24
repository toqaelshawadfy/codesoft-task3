import React from 'react'
import{Toaster} from"react-hot-toast";
import './Shoppingcart.css';
export default function Shoppingcart({Cartitems,Removeitem, calcTotalcart}) {
 console.log(Cartitems)
  return <>
  <div className="container">
    <div className="mycarttit text-center mt-5">
         <h3>My Cart</h3>
    </div>
    <Toaster position="top-center"
    reverseOrder={false}
    toastOptions={{
      style:{
        background:"black",
        color:"white",
       },
       success:{
                     iconTheme:{
                       primary:"#D92B5A",
                       secondary:"white"
                     }
                   }
                  }}/>
    <div className="container mt-4">
      {Cartitems.length === 0 ?(
        <div className="empty mt-5 text-center">
          <p>"Your cart is empty"</p>
        </div>
      ):(
        <div>
          <div className="mytable">
          {Cartitems.map((item) =>
      <div className="myitemscart">
      <table className='table'>
          <tbody>
            <tr key={item.id} className=''>
              <td>
                <div className="chooseitem d-flex align-items-center">
                  <img src={item.image} alt={item.name} className='itemimg'/>
                  <div className="chooseitemname ">
                    <h5>{item.name}</h5>
                    <span>{item.category}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="chooseitemprice mt-5 ">
                  <h5><span>Price:  </span>${item.price}</h5>
                </div>
              </td>
              <td>
                <div className="chooseitemQuantity mt-5 ">
                <p><span>Quantity:  </span>{item.quantity}</p>
                </div>
              </td>
              <td>
                <div className="removebtn mt-5 ">
                <button class="delete-button" onClick={()=>Removeitem(item.id)}>
                  <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
     
      )}
    </div>
    <div className="totalbox">
      <div className="total">
        <h5>Total: ${calcTotalcart().toFixed(2)}</h5>
      </div>
    </div>
    </div>
      )}
    </div>
  </div>
  </>
  
}
