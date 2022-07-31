import { useState } from "react";
import "./App.css";
import firebaseAuthService from "./FirebaseAuthService";
import LoginForm from "./components/LoginForm";

function App() {
  const [user, setUser] = useState(null);
  firebaseAuthService.subscribeToAuthChanges(setUser);
  return (
    <div className="App">
      <div className="title-row">
        <h1 className="title">Hotel Recipes</h1>
        <LoginForm existingUser={user} />
      </div>
    </div>
  );
}

export default App;
