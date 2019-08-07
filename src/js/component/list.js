import React from "react";
export class List extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
			todo: [
				{ label: "Wash my hands" },
				{ label: "Make the bed" },
				{ label: "Eat" },
				{ label: "Walk the dog" }
			]
		};
	}
	deleteItem(pupu) {
		const todo = [...this.state.todo];
		const updatedList = todo.filter(value => value.label !== pupu);
		this.setState({ todo: updatedList });
	}
	render() {
		return (
			<React.Fragment>
				<div id="header">todo</div>
				<div className="container">
					<div className="row">
						<input
							onKeyPress={e =>
								e.charCode == 13
									? this.setState({
											todo: this.state.todo.concat({
												label: e.target.value
											})
									  })
									: null
							}
						/>
					</div>
					<div className="col-row">
						<ul className="list list-group">
							{this.state.todo.map((value, index) => {
								return (
									<li className="group-item" key={index}>
										{value.label}
										<span
											onClick={() =>
												this.deleteItem(value.label)
											}>
											<i className="fas fa-times" />
										</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>{" "}
			</React.Fragment>
		);
	}
}
