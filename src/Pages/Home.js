import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/api/content")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Featured Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-900 text-white rounded">
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="w-full h-auto"
            />
            <div className="p-2">
              <h3 className="text-sm">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
