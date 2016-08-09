import React from "react";
import MultiForm from "hire-forms-multi-form";
import AltName from "./multiform/altname";

class AltNames extends React.Component {

	onChange(inPath, data) {
		let path = typeof inPath === "string" ? [inPath] : inPath;
		this.props.onChange(path, data);
	}

	onDelete(path) {
		let values = this.props.entity.data[this.props.name];
		values.splice(path[1], 1);
		this.props.onChange([path[0]], values);
	}

	render() {
		return (
			<div>
				<label>{this.props.name}</label>
				<MultiForm
					attr={this.props.name}
					component = {AltName}
					model={{nametype: "", displayName: ""}}
					onChange={this.onChange.bind(this)}
					onDelete={this.onDelete.bind(this)}
					values={this.props.entity.data[this.props.name]} />
			</div>
		);
	}
}

AltNames.propTypes = {
	entity: React.PropTypes.object,
	name: React.PropTypes.string,
	onChange: React.PropTypes.func
};

export default AltNames;