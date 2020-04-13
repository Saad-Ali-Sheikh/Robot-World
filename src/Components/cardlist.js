import React from 'react';
import Card from './Card.js';

const List=({robots})=>
{
	const array=robots.map((user,i)=>{
		return <Card key={i} name={robots[i].name} email={robots[i].email}/>
	})
	return <div>
			
			{array};
		   </div>;
}
export default List;