import {useState,useEffect} from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default function Main() {
	const [movies,setMovies] = useState([]),
		[loading,setLoading] = useState(true);

	useEffect(() => {
		fetch("https://www.omdbapi.com/?apikey=e0ee063d&s=panda")
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search);
				setLoading(false);
			});
	},[]);

	function search(str,type) {
		setLoading(true);
		fetch(`https://www.omdbapi.com/?apikey=e0ee063d&s=${str}&type=${type}`)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search);
				setLoading(false);
			});
	}

	return (
		<div className="container content">
			<Search search={search} />
			{!loading ?
			(<Movies movies={movies} />) :
			(<Loader />) }
		</div>
	);
}