/** @format */

import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"


const apiKey = "abf175114ccd1a0dd4fed539b1c86a60";
const url = "https://api.themoviedb.org/3/movie";
const tvUrl = "https://api.themoviedb.org/3/discover/tv";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const topRated = "top_rated";
const popular = "popular";

const Card = ({ img }) => {
  return <img className='card' src={img} alt='cover' />;
};
const Row = ({ title, arr = [] }) => {
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    };
    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
      console.log(results);
    };
    const fetchtvShows = async () => {
      const {
        data: { results },
      } = await axios.get(`${tvUrl}?api_key=${apiKey}`);
      setTvShows(results);
    };

    fetchUpcoming();
    fetchtvShows();
    fetchPopular();
    fetchTopRated();
  }, []);
  return (
    <section className='home'>
      <div
        className='banner'
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${`${imgUrl}/${popularMovies[0].poster_path}?api_key=${apiKey}`})`
            : 'url("https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg")',
        }}>
        {popularMovies[0] && <h1>{popularMovies[0].title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        <div>
        <button><BiPlay/> Play</button>
        <button>My List <AiOutlinePlus/></button>
        </div>
        
      </div>

      <Row title='Upcoming Movies' arr={upcomingMovies} />  
      <Row title='Popular Movies' arr={popularMovies} />
      <Row title='Tv Shows' arr={tvShows} />
      <Row title='Recently added' arr={topRatedMovies} />
    </section>
  );
};

export default Home;
