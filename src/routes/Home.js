import React from "react";
import axios from "axios";
import Movie from "../components/movie";
import "./Home.css";
//import PropTypes from "prop-types";

/*
function Food({name , picture , rating}){

  return (
    <div> 
      <h2>I eat {name}</h2>
      <h4>rating : {rating}</h4>
      <img src = {picture} alt={name}/> 
    </div>
  );

}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating:PropTypes.number,
}

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg",
    rate : 4.5,
  },
  {
    id : 2,
    name : "paimon",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP98uIwvvxH8I9Z5D0yK03s_QOlcVGsckd5w&usqp=CAU",
    rate : 4.8,
  },
  {
    id : 3,
    name : "kimbap",
    image:"data:image/jpeg;base64,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",
    rate : 4.2,
  },
];
*/

/*
function App() {
  return (
    <div>
      <h1>HELLO</h1>
      
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture = {dish.image} rating = {dish.rate}/>
      ))}

    </div>

    

  );
}
*/
class Home extends React.Component {

  state ={
    isLoading : true,
    movies : [],
  };

  // this is ES6 js async, await  means wait.. for the function 
  getMovies = async () =>{
    // data we want is in data -> data -> movies 
    // this is the way of ES6 js
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");

    // movies:movies will work same, new js is just smart enough to understand the shorter command
    this.setState({movies , isLoading : false});
    //console.log(movies);
  };

  componentDidMount(){
    this.getMovies();
    

    /*
    setTimeout(()=> {
      this.setState({isLoading : false});

    }, 4000)
    */
  }

  render(){
    // properties from state
    const {isLoading, movies} = this.state;
    return <section className="container">{isLoading 
      ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) 
      :(
      <div className="movies"> 
        {movies.map(movie =>(
        //console.log(movie);
        
          <Movie 
            key={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres}
            />
        ))}
      </div>
      )}
      
      </section>;
  
    }

/*
  state = {
    count : 0,

  };

  add = () => {
    this.setState( current => ({count : current.count +1}));
  };

  // this is bad practice, use [ current => ]
  minus = () => {
    this.setState({count : this.state.count-1});
  };

  render(){
    return (
    <div> 
      <h1>NUMBER : {this.state.count}</h1>  
      <button onClick={this.add}> Add </button>
      <button onClick={this.minus}> Minus </button>
    </div>
    
    );
  }
*/
}


export default Home;
