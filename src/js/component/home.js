import React from "react";

//include images into your bundle
import { List } from "./list";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<List />
			</div>
		);
	}
}

