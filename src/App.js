import React , {useState} from 'react'
import {BrowserRouter, Route, Link, Switch, Router, StaticRouter} from "react-router-dom";
import Header from './components/Header';
import Item from './components/Item';
import Acessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import './App.css'



function App(prop) {
 

  
  return(
      <div className='App'>
          <Header />
          <div className = 'app_items_container'>
         
           <Item 
          title = 'Model S'
          description = 'Order Online for Touchless Delivery'
          descLinks =''
          backgroundImg={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          towButton = 'true'
          first
          id ='modelS'
          
           /> 
          

          <Item 
          title = 'Model Y'
          description = 'Order Online for Touchless Delivery'
          descLinks =''
          backgroundImg={ModelY}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          towButton = 'true'
          id ='modelY'
           /> 
          

          <Item 
          title = 'Model 3'
          description = 'Order Online for Touchless Delivery'
          descLinks =''
          backgroundImg={Model3}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          towButton = 'true'
          id ='model3'

           /> 

          <Item 
          title = 'Model X'
          description = 'Order Online for Touchless Delivery'
          descLinks =''
          backgroundImg={ModelX}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='EXISTING INVENTORY'
          rightBtnLink=''
          towButton = 'true'
          id ='modelX'

           /> 


          <Item 
          title = 'Lowest Cost Solar Panels in America'
          description = 'Money-back guarantee'
          descLinks =''
          backgroundImg={SolarPanels}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          towButton = 'true'
          id ='solar'

           /> 

          <Item 
          title = 'Solar for New Roofs'
          description = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descLinks =''
          backgroundImg={SolarRoof}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          towButton = 'true'
          id ='sroofs'

           /> 

          <Item 
          title = 'Accessories'
          description = ''
          descLinks =''
          backgroundImg={Acessories}
          leftBtnText='SHOP NOW'
          leftBtnLink=''
          rightBtnText=''
          rightBtnLink=''
          towButton = 'false'
          center 
          id ='Accessories'
           /> 
           


          </div>
           
          
         </div>)
    
    
}

export default App;
