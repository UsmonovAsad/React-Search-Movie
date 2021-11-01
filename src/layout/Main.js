// import {Component} from "react";
// import Movies from "../components/Movies";
// import Loader from "../components/Loader";
// import Search from "../components/Search";

// class Main extends Component {
// 	state = {
// 		movies: [],
// 		loading: true
// 	}

// 	componentDidMount() {
// 		fetch("https://www.omdbapi.com/?apikey=e0ee063d&s=panda")
// 			.then(response => response.json())
// 			.then(data => this.setState({movies: data.Search,loading: false}));
// 	}

// 	search = (str,type = "") => {
// 		this.setState({loading: true});
// 		fetch(`https://www.omdbapi.com/?apikey=e0ee063d&s=${str}&type=${type}`)
// 			.then(response => response.json())
// 			.then(data => this.setState({movies: data.Search,loading: false}));
// 	}

// 	render() {
// 		const {movies} = this.state;
// 		return (
// 			<div className="container content">
// 				<Search search={this.search} />
// 				{!this.state.loading ?
// 				(<Movies movies={movies} />) :
// 				(<Loader />) }
// 			</div>
// 		);
// 	}
// }

// export default Main;
























import {Component} from "react";
import Loader from "../components/Loader";
import Search from "../components/Search";
import Movies from "../components/Movies";

class Main extends Component {
	state = {
		movies: [],
		loading: true
	}

	componentDidMount() {
		fetch("https://www.omdbapi.com/?apikey=e0ee063d&s=panda")
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search,loading: false}));
	}

	search = (str,type) => {
		this.setState({loading: true});
		fetch(`https://www.omdbapi.com/?apikey=e0ee063d&s=${str}&type=${type}`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search,loading: false}));
	}

	render() {
		const {movies,loading} = this.state;
		return (
			<div className="container content">
				<Search search={this.search} />
				{loading  ? <Loader /> : <Movies movies={movies} />}
			</div>
		);
	}
}

export default Main;


















