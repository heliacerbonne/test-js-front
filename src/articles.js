import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ list: res.data }))
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "No data" });
      });
  }

  render() {
    const { list } = this.state;
    return (
      <div style={{textAlign: "left", paddingLeft: "20px"}}>
        <h1>Articles :</h1>
        {list.length ? list.map((item) => (
              <div key={item.id}>
                <Link className="link" to={() => `/item/${item.id}`}>{item.title}</Link>
              </div>
            )): null}
      </div>
    );
  }
}

export default Articles;
