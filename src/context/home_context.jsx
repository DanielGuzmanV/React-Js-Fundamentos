import { createContext, useState } from "react";

const HomeContext = createContext();

function HomeProviderWrapper(props) {
  const [posts, setPosts] = useState([]);
  const [valueError, setError] = useState(false);

  const getPosts = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
      setError(false);
      
    } catch (error) {
      setError(true);
    }
  };

  return (
    <HomeContext.Provider value={{posts, valueError, getPosts}}>
      {props.children}
    </HomeContext.Provider>
  )
}

export {HomeProviderWrapper, HomeContext}

