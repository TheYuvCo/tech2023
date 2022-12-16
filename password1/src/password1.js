
import { useEffect } from "react";
function Password(props) {

    const {delta,setPassowrd} = props

    useEffect(()=>{
        if(delta.length < 3){
          setPassowrd('weak :(')
        }
        if(delta.length >= 3 && delta.length <= 6){
            setPassowrd('medium')
        }
        if(delta.length > 6){
            setPassowrd('strong!!!')
        }
      },[setPassowrd,delta])

      
  return (
    <div>
    </div>
  );
}

export default Password;
