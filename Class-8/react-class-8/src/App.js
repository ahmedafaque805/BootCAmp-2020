import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect(async()=>{

    const response = await fetch("https://api.github.com/users/ahmedafaque805/repos")
    const repos = await response.json()
    console.log(repos);
    setRepos(repos)
    



    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setData(json);
    //   })
        
  }, [])




  return (
    <div className="App">
      <h1>My GitHub Repos</h1>
     <ul>
       {repos.map((repoObj)=>{
         return(<li> key={repoObj.id}  {repoObj.name } </li>)
       })}
     </ul>
    </div>
  );
}

export default App;
