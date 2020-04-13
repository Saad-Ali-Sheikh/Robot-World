import React, {Component} from "react";

class Card extends Component {
  render() {
    return (
    	<div className="bg-light-green br3 ma2 pa1 dib grow">
    		<img alt="" src={`https://robohash.org/${this.props.name}?150x150`}/>
    		<h2 className="tc">{this.props.name}</h2>
    		<p className="tc">{this.props.email}</p>
    	</div>

    	);
  }
}
export default Card;