import React from 'react'
import Sidebar from '../Sidebar.jsx/Sidebar'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import './Layout.css'
export default function Layout() {
  const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  flex-wrap:wrap;
  height:90vh;
 `;
  return<>
  <Toaster position="top-right"
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
    <Layout>
      <Sidebar/>
      <div className='myshop'>
      <div className="start text-center">
        <h3>Shopping Now</h3>
      </div>
      <Outlet/>
      </div>
    </Layout>
  </>
}
