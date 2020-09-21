import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [results, setResults] = useState([])

  useEffect( ()=>{
    getResults();
    // .then(response=>{
    //   console.log(response.data);
    //   setResult(response.data.hits)
    //})
  },[])

  const getResults = async () =>{
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks');
    setResults(response.data.hits);
  };
  return (
    <>
    <ul>
    {
      results.map(result =>(
        <li key={result.objectID}>
          <a href={result.url}> {result.title}</a>
        </li>
      ))
    }
    </ul>
    </>
  );
}

export default App;
