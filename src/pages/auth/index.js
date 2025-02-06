import {signInWithPopup} from "firebase/auth"
import {auth, provider} from "../../config/firebase-config"
function Auth() {
  async function signInWithGoogle() {
    const res = await signInWithPopup(auth, provider)

    console.log('sign in! ', res)
  }
  return (
    <>
    <br/><br/>
    <div> Sign in with google</div>
    <br/><br/>
    <div>
      <button onClick={signInWithGoogle}>
        Sign in 
        </button>
    </div>
    </>
  )
}

export default Auth