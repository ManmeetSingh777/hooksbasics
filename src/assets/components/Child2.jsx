import { useEffect,useState } from "react";

export default function NewUseState(props){
    const [state, setState] = useState(0)
    const [like, setLike] = useState(0);
    const handleState =()=>{
        setState(state=>state==" "?props.para:" ")
    }
    
    const handleLike =()=>{
    setLike(like=>like+1)
}
    
    useEffect(()=>{
        alert("Content Button Clicked");
    },[state])
    
    
    return(
    <div>
    <h3>{state}</h3>
    <button onClick={handleState}>Content</button>
    <h4>{like}</h4>
    <button onClick={handleLike}>Like</button>
    </div>
    )
}