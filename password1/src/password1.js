
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

      /*

      function changePassVibe(){
        if(delta >= 100){
            passVibe(true);
        }
        else{
            passVibe(false)
        }
      }
*/

  return (
    <div>
    </div>
  );
}

export default Password;
