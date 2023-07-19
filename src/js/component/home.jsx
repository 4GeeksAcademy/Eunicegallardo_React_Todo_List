import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./TodoList";

//create your first component
const Home = () => {
	return (
		<div>
			<h1> MY TODOS</h1>
			<TodoList>
			</TodoList>
			

		</div>
	);
};

export default Home;
