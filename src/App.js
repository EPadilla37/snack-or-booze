import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Add from "./Add";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snackData = await SnackOrBoozeApi.getSnacks();
        const drinkData = await SnackOrBoozeApi.getDrinks();
        setSnacks(snackData);
        setDrinks(drinkData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snacks} drinks={drinks} />} />
            <Route path="/snacks" element={<Menu items={snacks} title="Snacks" />} />
            <Route path="/snacks/:id" element={<FoodItem items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu items={drinks} title="Drinks" />} />
            <Route path="/drinks/:id" element={<FoodItem items={drinks} cantFind="/drinks" />} />
            <Route path="/add" element={<Add />} />
            <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

