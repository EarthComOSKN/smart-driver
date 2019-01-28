import React,{Component} from 'react';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = { user: "" };
    }
  
    loginSummit() {
      const { user } = this.state;
      localStorage.setItem("user", user);
      this.props.history.push("/");
    }
  
    render() {
      console.log(this.state);
      console.log(this.props);
      return (
        <div>
          <h1>Login</h1>
          <input
            value={this.state.user}
            onChange={e => {
              this.setState({ user: e.target.value });
            }}
          />
          <button
            onClick={() => {
              this.loginSummit();
            }}
          >
            Login
          </button>
        </div>
      );
    }
  }

  export default Login