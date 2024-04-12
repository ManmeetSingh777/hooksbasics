import { useContext } from "react";
import { ToggleTheme } from "../../App";
import Child2 from './Child2'
export default function UseContext(){
  const theme = useContext(ToggleTheme);
    const content='I am Manmeet'
    const themeStyle = {
      backgroundColor: theme?"black":"grey",
      color:theme?"grey":"black",
      padding:"2rem",
      margin:"2rem"
    }
  
    return(
      <div style={themeStyle}>
       <Child2 para={content}/>
      </div>
    )
  }
