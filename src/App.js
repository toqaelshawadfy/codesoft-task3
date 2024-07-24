import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './Components/Layout/Layout';
import Layout2 from './Components/Layout2/Layout2';
import Shoppingcart from './Components/Shoppingcart/Shoppingcart';
import Dress from './Components/Dress/Dress';
import toast from 'react-hot-toast'
import './App.css';
import Shoes from './Components/Shoes/Shoes';
import Tshirt from './Components/Tshirt/Tshirt';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  const[Cartitems ,setcartitems]=useState(()=>{
    const savedproducts =localStorage.getItem('Cartitems')
    return savedproducts? JSON.parse(savedproducts):[]
  })
  function Addtocart(product){
    toast.success('Adding to Your Cart!')
    setcartitems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  }
  function Removeitem(productid){
    setcartitems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === productid);
      if (existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.id === productid
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return Cartitems.filter((item)=> item.id !== productid)
      }})
    toast.success('Successfully Deleted!')
    
  }
  function calcTotalcart(){
    const totalcart = Cartitems.reduce((total,item) => total + item.price* item.quantity ,0)
    return totalcart

  }
 useEffect(()=>{
  localStorage.setItem('Cartitems',JSON.stringify(Cartitems));
 },[Cartitems])

  let Routes =createBrowserRouter([
    {
      path:'' ,element:<Layout2/>,children:[
        {
          path:'',element:<Layout/>,children:[
            {path:'',element:<Dress Addtocart={Addtocart} />},
            {path:'Shoes',element:<Shoes Addtocart={Addtocart} />},
            {path:'Tshirt',element:<Tshirt Addtocart={Addtocart} />},
          ]
        },
        {path:'Shoppingcart' ,element:<Shoppingcart Cartitems={Cartitems} Removeitem={Removeitem}  calcTotalcart={ calcTotalcart} />},
        {path:"product-details/:id",element:<ProductDetails  Addtocart={Addtocart} /> }
      ]
    }
  ])


  return <>
   <RouterProvider router={Routes}/>
  </>;
}

export default App;
