// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const allDirectors = array.map(movie => movie.director) ;
  return allDirectors;
}


//Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director == director)
  return directorMovies
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director == director)
  const directorAverageScore = directorMovies.reduce((acu, movie) => acu + movie.score / (directorMovies.length), 0)
  return Number(directorAverageScore.toFixed(2))
}

// // Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const orderTitle = array.map(movie => movie.title).sort() 
  orderTitle.splice(20, orderTitle.length-20)
  return orderTitle
}


// // Exercise 5: Order by year, ascending
function orderByYear(array) { 
  const orderYear = array.sort((a, b) => a.year - b.year)
  const ordeYearTitle = orderYear.slice().sort((a, b) => {
      if (a.year === b.year) {
      return a.title.localeCompare(b.title);
      } 
  });
  return ordeYearTitle   
}

// // Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesCategory = array.filter(movie => movie.genre.includes(genre))
  const categoryAverage = moviesCategory.reduce((acu, movie) => acu + movie.score / (moviesCategory.length), 0)
  return Number(categoryAverage.toFixed(2))
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const convertDurationToMinutes = (duration) => {
    const [hours = 0, minutes = 0] = duration.match(/\d+/g).map(Number);
    return (hours * 60) + minutes;
  };

  const updatedMovies = array.map(movie => ({
    ...movie,
    duration: convertDurationToMinutes(movie.duration)
  }));
  return updatedMovies
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const yearFilms = array.filter(movie => movie.year === year)
  const maxValue = Math.max(...yearFilms.map(movie => movie.score))
  const filmOfYear = yearFilms.filter(movie => movie.score === maxValue)
  return filmOfYear
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
