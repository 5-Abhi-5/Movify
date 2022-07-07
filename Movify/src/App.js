import {useEffect,useState} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
const API_URL = 'https://www.omdbapi.com?apikey=3c6fe122';


const App = () => {
    const[movies,setMovies] = useState([]);
    const [search,setSearch] = useState('');
    const searchMovies =async (title)=>{

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect( () => {
        searchMovies('avengers');
    },[]);

    return (
        <div className='app'>

          <h1>Movify</h1>

          <div className="search">
         
          <input  
            placeholder="Search for movies" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />

            <img src={SearchIcon} alt="Search Icon" onClick={()=>searchMovies(search)}/>
          
          </div>
            {
                movies.length>0
                ?
                   ( <div className="container">
                  {movies.map((movie)=> <MovieCard movie={movie}/>)}
                     </div>)
                     :(
                            <div className="empty">
                                <h2>No movies found</h2>
                            </div>
                     )
            }
        </div>
    )
}
export default App;