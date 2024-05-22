import React, { Component } from "react";

export default class UC extends Component {
  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            minHeight: "5vh",
            backgroundColor: "#f2c94c",
            fontSize: "1.3vw",
            display: "flex",
            alignItems: "center",
          }}
        >
          <marquee>
            !! Website Under Maintainance - For any Query contact on
            contact@hexadefend.com !!
          </marquee>
        </div>
      </>
    );
  }
}
