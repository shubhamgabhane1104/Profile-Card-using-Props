
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">

      <h1>User Profile</h1>

      <ProfileCard
        name="Shubham Gabhne"
        image="https://i.pravatar.cc/200?img=12"
        description="MCA student and aspiring Software Engineer interested in Java, web development, and full-stack development."
      />

    </div>
  );
}

export default App;

