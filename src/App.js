import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import './App.css'
import { DarkModeProvider } from "./context/DarkModeContext";



const filters = ['all', 'active', 'completed'];


function App() {
  const [filter, setFilter] = useState([filters[0]])



  return (
    <DarkModeProvider>
      <div className="App">
        <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
        <TodoList filter={filter}/>
      </div>
    </DarkModeProvider>
  );
}

export default App;
