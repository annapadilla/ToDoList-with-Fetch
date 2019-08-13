import React from "react";
export class List extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = {
			todo: []
		};
	}
	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/annap")
			.then(response => response.json())
			.then(data => {
				this.setState({ todo: data });
			});
	}
	updateToDoList() {
		e =>
			e.charCode == 13
				? this.setState(
						fetch(
							"https://assets.breatheco.de/apis/fake/todos/user/annap",
							{
								method: "POST",
								body: JSON.stringify(todo),
								headers: {
									"Content-Type": "application/json"
								}
							}
						)
							.then(response => response.json())
							.then(data => {
								this.setState({ todo: data });
							})
				  )
				: null;
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
				<div className="container my-container">
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
					<div className="row counter pl-3">
						{"Items left: " + this.state.todo.length}
					</div>
				</div>{" "}
			</React.Fragment>
		);
	}
}
