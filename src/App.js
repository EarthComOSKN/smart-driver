import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import queryString from "query-string";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    if (query.user) {
      this.setState({ query });
      localStorage.setItem("user", query.user);
    } else {
      const user = localStorage.getItem("user");
      this.setState({ query: { user } });
    }
  }

  render() {
    console.log(this.state.query);
    return (
      <div className="App">
        {this.state.query ? (
          <Navbar user={this.state.query.user} />
        ) : (
          <h1>Loading...</h1>
        )}
        <Schedule />
      </div>
    );
  }
}

function Navbar({ user }) {
  const [inprogress,setInprogress] = useState(1)
  const [complete,setComplete] = useState(0)
  
  const viewInprogress = () => {
    setInprogress(1)
    setComplete(0)
  }
  const viewComplete = () => {
    setInprogress(0)
    setComplete(1)
  }

  return (
    <div className="fixedElement">
      <div className="user d-flex justify-content-center align-items-center">
        {user}
      </div>
      <div >
        <div className="row filter d-flex justify-content-center align-items-center">
          <div className={'col center '+(inprogress ? 'active' : '')} onClick={()=> {viewInprogress()}}>กำลังดำเนินการ</div>
          <div className={'col center '+(complete ? 'active' : '')} onClick={()=> {viewComplete()}}>งานที่เสร็จแล้ว</div>
        </div>
      </div>
    </div>
  );
}

function Schedule() {
  const [task, setTask] = useState([
    { title: "test", location: "test location" }
  ]);
  useEffect(async () => {
    const data = await axios.get("https://reqres.in/api/unknown");
    console.log(data.data.data);
    const temp = [
      {
        reciever: "ชาณิสสา ตรีทิพไกวัลพร1",
        address: "219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
        phone: "0837093547"
      },
      {
        reciever: "ชาณิสสา ตรีทิพไกวัลพร2",
        address: "219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
        phone: "0837093547"
      },
      {
        reciever: "ชาณิสสา ตรีทิพไกวัลพร3",
        address: "219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
        phone: "0837093547"
      },
      {
        reciever: "ชาณิสสา ตรีทิพไกวัลพร4",
        address: "219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
        phone: "0837093547"
      },
      {
        reciever: "ชาณิสสา ตรีทิพไกวัลพร",
        address: "219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
        phone: "0837093547"
      },
      {
        reciever: "ชาณิสสา ตรีทิพไกวัลพร",
        address: "219 ถนนพระราม2 แขวงบางมด เขตจอมทอง กรุงเทพฯ 10150",
        phone: "0837093547"
      }
    ];
    // setTask(data.data.data);
    setTask(temp);
  }, []);
  return (
    <div className="container schedule">
      {task.map((e,index) => {
        return (
          <div className="row " key={index}>
            <div className="col ">
              <Card data={e} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Card({ data }) {
  const test = () => {
    console.log(data.reciever);
  };
  return (
    <div className="card container">
      <div className="row">
        <div className="col-9">
          <div className="detail">{data.reciever}</div>
          <div className="detail">{data.address}</div>
          <div className="detail">{data.phone}</div>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-danger"
            onClick={() => {
              test();
            }}
          >
            ส่งงาน
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
