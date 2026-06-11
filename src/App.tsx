import { PolicyProvider } from "./context/PolicyContext"

function App() {

  return (
    <PolicyProvider>
      <h1 className='bg-gray-300 font-bold text-blue-800'>Welcome to app </h1>
    </PolicyProvider>
  )
}

export default App
