import React,{Component} from 'react';
import List from '../Components/cardlist.js';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll.js';
import '../Components/Scroll.css';
class App extends Component
{
	constructor()
	{
		super()
		this.state={
			robots:[],
			searchfield: '',
		}
	}
	onSearchChange=(event)=>
	{
		this.setState({searchfield: event.target.value});
	}
	componentWillMount()
	{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(result=>result.json())
		.then(users=>{this.setState({robots:users})})
	}
	render()
	{
		const fiterArray=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return(
		<div className="tc">
			<h1>Robo Freinds</h1>
			<SearchBox  onSearchChange={this.onSearchChange}/>
			<Scroll>
				<List robots={fiterArray}/>
			</Scroll>
		</div>
		);
	}
	
}
export default App;