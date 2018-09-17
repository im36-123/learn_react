import React from "react";
import { render } from "react-dom";

import "./styles.css";

class ReactElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = { temp: 100 };
	}

	render() {
		const { temp } = this.state;
		return (
			<div>
				<div className={this.H2oState(temp)}>
					<h2>{this.H2oState(temp)}</h2>
					<h2>
						{temp} ℃{this.props.temp}
					</h2>
				</div>
				<button onClick={this.onPlus}>+</button>
				<button onClick={this.onMinus}>-</button>
			</div>
		);
	}

	onPlus = () => {
		const { temp } = this.state;
		this.setState({ temp: temp + 1 });
	};

	onMinus = () => {
		const { temp } = this.state;
		this.setState({ temp: temp - 1 });
	};

	H2oState(temp) {
		if (temp < 0) {
			return "ice";
		} else if (temp > 100) {
			return "steam";
		} else {
			return "water";
		}
	}
}

render(<ReactElement />, document.getElementById("root"));
