import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";

import CurrentGame from "./CurrentGame.js";
import CreateJoin from "./CreateJoin.js";
import Navbar from "./Navbar.js";

class App extends Component {
	render() {
		let user = this.props.currentUser;
		return (
			<Router>
				<div>
					<Navbar />
					{user &&
						<Switch>
							<Route exact path="/" component={CreateJoin} />
							<Route path="/:gameId" component={CurrentGame} />
						</Switch>
					}
				</div>
			</Router>
		);
	}
}

export default withTracker(() => {
	return {
		currentUser: Meteor.user()
	};
})(App);