import React, { Component } from 'react';
import './Users.css';
import axios from 'axios';

class Users extends Component {

	constructor(props) {
		super(props);

		this.state = {
			users:[],
		};

	}


	componentDidMount() {
    axios.get('https://randomuser.me/api/?results=1000&nat=us&inc=name,email,picture')
    .then(res => {
      const acct = res.data.results;
      this.setState({users: acct});
    })
  }

	render() {
    return (
      <div id="main-container">
        <div id="round-container">
          {this.state.users.map((acct, index) => (
            <div id="users-container" key={index} data-index={index}>
              <span className="left" data-index={index}>
                <img className="img-circle" data-index={index} src={acct.picture.medium} alt="Portrait"/>
              </span>

              <span className="centerName" data-index={index}>
                {acct.name.first.charAt(0).toUpperCase() + acct.name.first.slice(1)} {acct.name.last.charAt(0).toUpperCase() + acct.name.last.slice(1)}
              </span><br />

              <span className="center" data-index={index}>
                {acct.email}
              </span>
            </div>
          ))}
        </div>
      </div>

    );
  }
}

export default Users;