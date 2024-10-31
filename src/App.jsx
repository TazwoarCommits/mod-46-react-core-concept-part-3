import './App.css'
import ReUsableForm from './Components/ReUsableForm/ReUsableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = e => {
    e.preventDefault();
  }

  const handleUpdateProfile = e => {
    e.preventDefault();
  }


  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReUsableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit} ></ReUsableForm>
      <ReUsableForm formTitle={"Profile Update"} submitBtnText={'Update'} handleSubmit={handleUpdateProfile} ></ReUsableForm>
    </>
  )
}

export default App
