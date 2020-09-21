import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('reacthooks')
  const searchInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( ()=>{
    getResults();
  },[])

  const getResults = async () =>{
    setLoading(true);
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);
    }
    catch(err) {
      setError(err)
    } 

    setLoading(false);
  };

  const handleSearch = event =>{
    event.preventDefault();
    getResults()
  }

  const handleClearSearch = () =>{
    setQuery("");
    searchInputRef.current.focus();
  }

  return (
    <div className="contaier max-w-md mx-auto p-4 m-2 bg-purple-lightest shadow-lg rounded">
    <img 
      src="https://icon.now.sh/react/c0c" alt="React Logo" className="float-right h-12">
      </img>
    <h1 className="text-grey-darkest font-thin">Hooks news</h1>
    <form 
      onSubmit={handleSearch}
      className="mb-2"
      >
      <input 
        type="text" 
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        ref={searchInputRef}
        className="border p-1 rounded"
        />
      
      <button 
        type="submit"
        className="bg-orange rounded m-1 p-1"
        >
        Search
        </button>
      <button 
        type="button" 
        onClick={handleClearSearch}
        className="bg-teal text-white p-1 rounded"
        >Clear</button>
    </form>
    
    { loading ? (
      <div className ="font-bold text-orange-dark">
      Loading
      </div>
    ):
      (
        <ul className="list-reset leading-normal">
    {
      results.map(result =>(
        <li key={result.objectID} className="text-indigo-dark hover:text-indigo-darkest">
          <a href={result.url}> {result.title}</a>
        </li>
      ))
    }
    </ul>
    )}
    {error && <div className="text-red font-bold">{error.message}</div>}
    </div>
  );
}

export default App;
