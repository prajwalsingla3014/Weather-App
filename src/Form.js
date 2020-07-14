import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
	<div className="text1">
		<input  type="text" name="city" placeholder="City..."/>
	</div>
	<div class="text2">
		<input  type="text" name="country" placeholder="Country..."/>
	</div>
		<button className="button1">Get Weather</button>
	</form>
);

export default Form;
