
import { useContext } from "react";
import { Home, Login, Register, Settings, Single, TopBar, Write } from "./components/indexComp"
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
