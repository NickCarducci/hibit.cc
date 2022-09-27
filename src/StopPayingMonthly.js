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
    var goingprice = String((200 + 15) / this.state.served);
    const decimal = goingprice.lastIndexOf(".");
    //console.log(decimal);
    goingprice =
      Number(
        goingprice.substring(0, (decimal > 0 ? decimal : goingprice.length) + 1)
      ) + 1;
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
                zIndex: "1",
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
              style={{
                color: "chocolate",
                textDecoration:
                  this.state.chosenFeature === "load balancing" && "underline"
              }}
            >
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
                  userSelect: "none", //pyramid discount technical
                  cursor: "pointer",
                  ...cftextgradientstyle
                }}
              >
                load balancing, DDOS protection, and global reach
              </span>
            </span>
            <br />
            <br />
            <div style={{ width: "200px" }}>
              <div style={{ float: "right" }}>
                <span
                  style={{ color: this.state.served > 27 ? "black" : "grey" }}
                >
                  27: $8/mo
                </span>
                <br />
                <span
                  style={{ color: this.state.served > 44 ? "black" : "grey" }}
                >
                  44: $5/mo
                </span>
                <br />
                <span
                  style={{ color: this.state.served > 72 ? "black" : "grey" }}
                >
                  72: $2/mo
                </span>
              </div>
            </div>
            customers
            <br />(
            <b
              style={{
                color: "teal"
              }}
            >
              {this.state.served}
            </b>
            {space}
            <a
              style={{ color: "black" }}
              href="https://www.quora.com/unanswered/Is-a-pyramid-scheme-only-viable-when-there-are-service-worker-machine-rents-making-prices-higher-than-technological-competition"
            >
              served
            </a>
            ).{space}${this.state.served < 15 ? "15" : goingprice}
            /month
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
            the instance on{space}
            <i>the $150 device that you used</i>.
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
            POST: (
            <span style={{ color: "blue" }}>
              only your select{/*certain */} domains
            </span>
            )
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
        {!this.state.chooseFeature && <i style={{ color: "grey" }}>nothing</i>}
      </div>
    );
  }
}
export default StopPayingMonthly;
