import React from "react";
import "./Button.css";
import { TextField } from "@material-ui/core";
import Posts from "./Posts";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helperText: "Your Message will be posted as UserName",
      error: false
    };
  }
  onChange(event) {
    if (event.target.value.length > 2) {
      this.setState({
        helperText: "Your Message will be posted as UserName",
        error: false
      });
    } else {
      this.setState({ helperText: "invalid format", error: true });
    }
  }
  render() {
    return (
      <>
        <div>
          <TextField
            label="Your Message"
            fullWidth
            placeholder="Write a Comment"
            color="primary"
            helperText={this.state.helperText}
            onChange={this.onChange.bind(this)}
            error={this.state.error}
            required
            id="outlined-required"
          />
          <br /> <br />
          <button onChange={this.onChange.bind(this)}>Post</button>
        </div>
        <div className="posts_container">
          <Posts />
          <Posts />
          {/* <Posts /> */}
        </div>
      </>
    );
  }
}
export default Button;
