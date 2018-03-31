import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

import AccountsUIWrapper from "./AccountsUIWrapper.js";

class HomeHeaderUser extends Component {
	render() {
		let maxWpm = this.props.maxWpm;
		return (
			<div className="row text-center">
				<div className="col-sm-3">
					<h1 className="display-1">
						<Link to="/">TYPO</Link>
					</h1>
				</div>
				<div className="col-sm-6 header-message">
					{maxWpm !== undefined &&
						<span>
							Your max: <span className="bigger-header-message">{maxWpm}</span> wpm
						</span>
					}
				</div>
				<div className="col-sm-3">
					<AccountsUIWrapper />
				</div>
			</div>
		);
	}
}

export default withTracker(() => {

	let maxWpm = undefined;
	if (Meteor.user()) {
		maxWpm = Meteor.users.findOne({username: Meteor.user().username}).profile.maxWpm;
	}
	return {
		maxWpm
	};
})(HomeHeaderUser);