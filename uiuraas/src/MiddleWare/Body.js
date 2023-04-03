import React ,{ useState } from "react";
import ApplicationRead from "../Pages/ApplicationRead/ApplicationRead";
import Application from "../Pages/ApplicationWrite/Application";

function Body(props) {
  // return <Application/>;
  const [state, setState] = useState('ApplicationRead')
  return(
    <>
  {state =='ApplicationRead' && (
    <ApplicationRead />
  )} 
   {state =='Application' && (
    <Application />
  )} 
  

  </>
  )
 
}


export default Body;