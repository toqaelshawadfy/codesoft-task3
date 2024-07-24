import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Sidebar.css'
export default function Sidebar() {
  const SidebarContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:5px;
  
`;
   return<>
           <SidebarContainer>
           <div className="title">
             <h4>Category</h4>
         </div>
         <div className="links d-flex flex-column mt-4">
            
            <div><NavLink className={(x)=> x.isActive === true ?"active ":'mytap  '} to='' style={{ textDecoration: 'none' }}>Dress</NavLink ></div>
            <div className='mt-2'><NavLink className={(x)=> x.isActive === true ?"active":'mytap  '} to='/Shoes' style={{ textDecoration: 'none' }}>Shoes</NavLink ></div>
             <div className='mt-2'><NavLink className={(x)=> x.isActive === true ?"active":'mytap  '} to='/Tshirt' style={{ textDecoration: 'none' }}>T-shirt</NavLink ></div>
          
        </div>
           </SidebarContainer>

  </>
}
