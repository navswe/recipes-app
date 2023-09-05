import axios from "axios";
import "./App.css";

//import react {Routes, Route} components from react-router-dom
import { Routes, Route } from "react-router-dom";

// import Footer & Header components
import Footer from "./components/Footer";
import Header from "./components/Header";

//import pages
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="newRecipe" element={<NewRecipeScreen />} />
        <Route path="recipe/:id" element={<DetailScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
