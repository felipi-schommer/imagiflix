import React from "react";

import CONST from '../data/constants';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import Score from "./Score";
import placeholder from "../Assets/header.jpg";


const Hero = ({ backdrop_path = null, title = "Avengers Endgame", vote_avarege = 10}) => {
  const {IMAGEURL} = CONST;

  return(
  <header className="box-border relative min-h-screen -mb-32">
    <img
      className="object-cover object-center h-auto w-full"
      src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder}
      alt="Filme em destaque"
    />

    <div className="absolute left-0 bottom-0 w-full h-2/6 bg-gradient-to-b from-transparent to-black"></div>

    <article className="absolute bottom-0 mb-64 px-8 ">
      <p className="text-3xl">Assita agora:</p>
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="text-xl">
        Nota{}
        <Score value={vote_avarege} />
      </p>
      <button className="py-1 px-8 mr-3 mt-6  bg-black bg-opacity-50 rounded-md text-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
        <FontAwesomeIcon className="mr-3" icon={faPlay} />
        Assistir
      </button>
      <button className="py-1 px-8 mt-6 bg-black bg-opacity-50 rounded-md text-xl transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
        <FontAwesomeIcon className="mr-3" icon={faPlus} />
        Minha Lista
      </button>
    </article>
  </header>
)};

export default Hero;
