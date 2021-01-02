import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  };
  getMovies = async () => {
    const {
      data : {
        data : { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading : false});
  }
  //컴포넌트가 마운트되면 axios.get()함수가 실행되며 영화 데이터를 가져온다.
  componentDidMount(){
    //영화 데이터 로딩!!
    //axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return <div> 
      {isLoading 
        ? 'Loading....' 
        : movies.map((movie)=>{
        return <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.summary}
                poster={movie.medium_cover_image}
        />;
      })} 
      </div>;
  }
}

export default App;