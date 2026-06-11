import { PolicyProvider } from "./context/PolicyContext"
import MyPolicies from "./pages/MyPolicies"

function App() {

  return (
    <PolicyProvider>
      <MyPolicies />
    </PolicyProvider>
  )
}

export default App
