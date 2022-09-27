import React from "react";

class StopPayingMonthly extends React.Component {
  state = { served: 0 };
  render() {
    const space = " ";
    const chooseFeature = (
      e /* = (e, y) => {
        return {
          target: { innerText: y ? e.target.id : e.target.innerText }
          ///...Object(`{target:{innerText:${e.target[y ? "id" : "innerText"]}}}`)
        };
      }*/
    ) =>
      this.setState({
        chosenFeature:
          this.state.chosenFeature !== e.target.innerText && e.target.innerText
      });

    const cftextgradientstyle = {
      background: "linear-gradient(to right,chocolate,darkorchid)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    };
    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <div style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              //zIndex: "1",
              height: "100%",
              width: "100%",
              position: "absolute",
              backgroundColor: "rgba(80,30,160,.2)"
            }}
          >
            <div
              onClick={this.props.setWhy}
              style={{
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                position: "fixed",
                right: "20px"
              }}
            >
              why?
            </div>
          </div>
          <div style={{ width: "100%", opacity: ".6" }}>
            <a
              href="https://commie.dev"
              style={{
                fontFamily: "'Nabla', cursive",
                backgroundColor: "rgb(65, 90, 159)"
              }}
            >
              stop paying monthly
            </a>
            <br />
            <i>Bringing outright back</i>
            <br />
            <button style={{ cursor: "pointer" }}>
              $150 8gb application processor
            </button>
            <br />
            0-14 sold: $15/mo{" "}
            <span
              //id="caching"
              onClick={chooseFeature}
              style={{
                userSelect: "none",
                cursor: "pointer",
                color: "blue",
                textDecoration:
                  this.state.chosenFeature === "caching" && "underline"
              }}
            >
              caching
            </span>
            <br />
            15:{" "}
            <span
              //id="load balancing"
              onClick={() =>
                this.setState({
                  chosenFeature:
                    this.state.chosenFeature !== "load balancing" &&
                    "load balancing"
                })
              }
              style={{
                userSelect: "none",
                cursor: "pointer",

                textDecoration:
                  this.state.chosenFeature === "load balancing" && "underline",
                ...cftextgradientstyle
              }}
            >
              load balancing and DDOS
            </span>
            <br />
            30: $8/mo
            <br />
            60: $4/mo
            <br />(
            <b
              style={{
                color: "teal"
              }}
            >
              {this.state.served}
            </b>
            {space}served).
            <br />
            <br />
            <i>Scale down anyime</i>
            <br />
            You can pay $15 shipping to{" "}
            <span
              onClick={chooseFeature}
              style={{
                userSelect: "none",
                cursor: "pointer",
                color: "cadetblue", //darkolivegreen
                textDecoration:
                  this.state.chosenFeature === "retrieve and delete" &&
                  "underline"
              }}
            >
              retrieve and delete
            </span>{" "}
            the instance on the $150 device that you used.
            <br />
            <br />
            <span style={{ textDecoration: "underline" }}>support</span>
            <br />
            latest release node.js (<i>planning</i>)
          </div>
        </div>
        {this.state.chosenFeature === "caching" && (
          <div>
            GET: (referer origin anywhere)
            <br />
            POST: (<span style={{ color: "blue" }}>only certain domains</span>)
          </div>
        )}
        {this.state.chosenFeature === "retrieve and delete" && (
          <i>
            You can pay $30 to send it back{space}
            <b>for no guarantee</b>, or send in your own - or, keep it here.
          </i>
        )}
        {this.state.chosenFeature === "load balancing" && (
          <div>
            (same as caching) but with
            <br />
            POST: (
            <span style={cftextgradientstyle}>referer origin anywhere</span>)
          </div>
        )}
      </div>
    );
  }
}
export default StopPayingMonthly;