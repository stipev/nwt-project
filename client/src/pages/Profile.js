import React from "react";
import {
  getUsername,
  getFirstName,
  getLastName,
  getEmail
} from "../components/AuthService";

class Profile extends React.Component {
  state = {
    message: "Input review data here:",
    code: "",
    review: "",
    rate: "",
    stars: [
      { value: 1, isActive: false, isHover: false, cursorPointer: false },
      { value: 2, isActive: false, isHover: false, cursorPointer: false },
      { value: 3, isActive: false, isHover: false, cursorPointer: false },
      { value: 4, isActive: false, isHover: false, cursorPointer: false },
      { value: 5, isActive: false, isHover: false, cursorPointer: false }
    ]
  };

  updateCode = event => {
    this.setState({ code: event.target.value });
  };
  updateReview = event => {
    this.setState({ review: event.target.value });
  };

  onStarClick = value => {
    let _stars = this.state.stars;
    let stars = _stars.map(star => {
      for (let i = 0; i < 5; i++) {
        if (star.value <= value) {
          star.isActive = true;
        } else {
          star.isActive = false;
        }
      }
      return star;
    });
    this.setState({ stars, rate: value });
  };

  render() {
    return (
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "10rem"
          }}
        >
          <div>HELLO {getUsername()} </div>
          <div>First name: {getFirstName()}</div>
          <div>Last name: {getLastName()}</div>
          <div>E-mail: {getEmail()}</div>
        </div>
        <div
          className="box"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h5 className="title is-5 has-text-info	">{this.state.message}</h5>

          <div className="field">
            <label className="label">Code :</label>

            <div className="control">
              <input
                onChange={this.updateCode}
                className="input is-info is-small"
                type="text"
                placeholder="Enter code here..."
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Review :</label>

            <div className="control">
              <textarea
                onChange={this.updateReview}
                className="textarea is-info"
                placeholder="Info textarea"
              />
            </div>
            <div className="field">
              <label className="label">Rate :</label>
              <div>
                {this.state.stars.map(star => {
                  return (
                    <i
                      key={star.value}
                      style={{ cursor: "pointer" }}
                      className={
                        star.isActive
                          ? "fas fa-star icon has-text-info"
                          : "far fa-star icon has-text-info"
                      }
                      onClick={() => {
                        this.onStarClick(star.value);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <button className="button is-info"> SUBMIT REVIEW </button>
        </div>
      </div>
    );
  }
}
export default Profile;
