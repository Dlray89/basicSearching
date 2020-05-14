import React from 'react';
import logo from './logo.svg';
import './App.css';

const superheros = [
    "Batman",
    "Superman",
    "Flash",
    "Ironman",
    "Captian America",
    "Spider-Man",
]

function App() {
    const [search, setSearch ] = React.useState("")
    const [searchResult, setSearchResults] = React.useState([])

    const handleChange = e =>{
        setSearch(e.target.value)
    }

    React.useEffect(() => {
        const results = superheros.filter(superhero => 
            superhero.toLowerCase().includes(search.toLowerCase())
            )
            setSearchResults(results)
    }, [search]);
    

  return (
    <div className="App">
    <h1>SearchBar</h1>

    <input
    value={search}
    onChange={handleChange}
     placeholder="search.." 
     />



    <div>
        {searchResult.map(hero => (
            <p>{hero}</p>
        ))}
    </div>
    </div>
  )
}

export default App;
