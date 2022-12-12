
import { useEffect } from "react";
function Password(props) {

    const {delta,setPassowrd} = props

    useEffect(()=>{
        if(delta < 100){
          setPassowrd('weak!')
        }
        if(delta >= 100 && delta <= 1000000){
            setPassowrd('medium!!!')
        }
        if(delta > 1000000){
            setPassowrd('strong!!!!!')
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
