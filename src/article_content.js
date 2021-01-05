import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Article_Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "",
      body: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + this.state.id)
      .then((res) => {
        this.setState({ title: res.data.title });
        this.setState({ body: res.data.body });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errMsg: "No data" });
      });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div style={{textAlign: "left", paddingLeft: "20px"}}>
        <h1>{title}</h1>
        <p>{body}</p>
        <Link to="/">Retour</Link>
      </div>
    );
  }
}

export default Article_Content;
