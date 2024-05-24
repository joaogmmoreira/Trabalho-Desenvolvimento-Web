const url = 'https://api.themoviedb.org/3/movie/top_rated';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDgzODY2NzNhYTk5MjA1MjU5MmMxYmY0YjM0NTk4YiIsInN1YiI6IjY2NTBkZTAyMjAyZGUxN2E2ZTdkNDNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QR7iUSLSR7rBG4dJwwp5Pc453KQ3Zecn7VCwyZ1mLzk'
  }
};

export const fetchMovies = async () => {
  const response =  await fetch(url, options);
  const json = await response.json();

  // console.log(json)

  return json;
}

