import {Component} from "react";

class Search extends Component {
	state = {
		search: "panda",
		type: ""
	}

	search = (e) => {
		if (e.key === "Enter") {
			this.props.search(this.state.search,this.state.type);
		}
	}

	changeRadio = (e) => {
		this.setState({type: e.target.value},() => {
			this.props.search(this.state.search,this.state.type);
		})
	}

	render() {
		return (
			<div className="row">
		          <div className="input-field">
		            <input
		              type="search"
		              className="validate input"
		              placeholder="Search..."
		              value={this.state.search}
		              onChange={(e) => this.setState({search: e.target.value})}
		              onKeyDown={this.search}
		            />
		            <button
		              className="btn search-btn"
		              onClick={() => this.props.search(this.state.search,this.state.type)}>
		            	Search Movies
		            </button>
		          </div>
		          <div className="radios">
		          	<label className="label">
				        <input
				          id="all"
				      	  className="with-gap"
				          name="type" 
				          type="radio" 
				          checked={this.state.type === ""}
				          value=""
				          onChange={this.changeRadio}/>
				          <label htmlFor="all" className="checkbox-clone">
				          	<span></span>
				          </label>
				        <span>All</span>
				    </label>
				    <label className="label">
				        <input
				      	  className="with-gap"
				      	  id="movie"
				          name="type" 
				          type="radio"
				          value="movie"
				          checked={this.state.type === "movie"}
				          onChange={this.changeRadio}/>
				          <label htmlFor="movie" className="checkbox-clone">
				          	<span></span>
				          </label>
				        <span>Movies Only</span>
				    </label>
				    <label className="label">
				        <input
				      	  className="with-gap"
				      	  id="series"
				          name="type" 
				          type="radio" 
				          value="series"
				          checked={this.state.type === "series"}
				          onChange={this.changeRadio}/>
				          <label htmlFor="series" className="checkbox-clone">
				          	<span></span>
				          </label>
				        <span>Series Only</span>
				    </label>
		          </div>
		    </div>
		);
	}
}


export default Search;