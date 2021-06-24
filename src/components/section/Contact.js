import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../css/Contact.css";
export class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="element">
          <h4>Name:</h4>
          <TextField
           className="text"
            id="filled-basic"
            label="Enter your name"
            variant="filled"
          />
        </div>

        <div className="element">
          <h4>Email:</h4>
          <TextField
            className="text"
            id="filled-basic"
            label="Enter your email"
            variant="filled"
          />
        </div>
        <div className="element">
          <h4>Website:</h4>
          <TextField
             className="text"
            id="filled-basic"
            label="Enter your website"
            variant="filled"
          />
        </div>
        <div className="element">
          <h4>Comment:</h4>
          <TextField
             className="text"
            id="filled-basic"
            label="Enter your comment"
            variant="filled"
          />
        </div>
        <div className="element">
          <div className="submit">
            <Button variant="outlined" color="secondary">
              submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
