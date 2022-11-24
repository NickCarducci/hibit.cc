import React from "react";

class StopPayingMonthly extends React.Component {
  state = { served: 0 };
  componentWillUnmount = () => {
    clearTimeout(this.runscreenshottimeout);
    clearTimeout(this.firewallPlustimeout);
    clearTimeout(this.designUItimeout);
    clearTimeout(this.anontimeout);
    clearTimeout(this.nodeDevtimeout);
    clearTimeout(this.frametimeout);
    clearTimeout(this.sidemenutimeout);
    clearTimeout(this.traptimeout);
    clearTimeout(this.jstimeout);
    clearTimeout(this.emailtimeout);
    clearTimeout(this.rusttimeout);
  };
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
    var mbps = 12 * this.state.served;
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
              //zIndex: "1", i'd rather my foot in your mouth than an A+
              height: "100%",
              width: "100%",
              position: "absolute",
              backgroundColor: "rgba(80,30,160,.2)"
            }}
          >
            <span
              onMouseEnter={
                () =>
                  this.setState(
                    {
                      firewallPlustimeout:
                        this.state.firewallPlustimeout === true
                          ? 1
                          : !this.state.firewallPlustimeout
                    },
                    () => {
                      clearTimeout(this.firewallPlustimeout);
                      this.firewallPlustimeout = setTimeout(() => {
                        this.setState({ firewallPlustimeout: false });
                      }, 5000);
                    }
                  ) //scopebook
              }
              style={{
                transition: ".3s ease-out",
                justifyContent: "space-between",
                maxWidth: "max-content",
                width: "calc(100% - 50px)",
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                display: "flex",
                position: "fixed",
                right: "20px"
              }}
            >
              {this.state.firewallPlustimeout === 1 ? (
                <a
                  style={{ color: "white" }}
                  href="https://github.com/w3c/strategy/issues/358"
                >
                  all-methods-local-proxy
                </a>
              ) : (
                this.state.firewallPlustimeout && (
                  <a
                    style={{ color: "white" }}
                    href="https://www.nginx.com/learn/waf-web-application-firewall/"
                  >
                    Config Web Firewall
                  </a>
                )
              )}

              <span
                style={{
                  paddingLeft: "6px"
                }}
                onClick={this.props.setWhy}
              >
                {this.state.firewallPlustimeout && `  `}
                why?
              </span>
            </span>
            <div
              onMouseEnter={
                () =>
                  this.setState({ rusttimeout: true }, () => {
                    clearTimeout(this.rusttimeout);
                    this.rusttimeout = setTimeout(() => {
                      this.setState({ rusttimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 0px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "460px"
              }}
            >
              {this.state.rusttimeout && (
                <span>
                  Struct objects per field instantiate implementations
                </span>
              )}
              {space}
              <span
                style={{
                  transform: "translateY(20px)"
                }}
              >
                rustic
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ importtimeout: true }, () => {
                    clearTimeout(this.importtimeout);
                    this.importtimeout = setTimeout(() => {
                      this.setState({ importtimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 0px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "430px"
              }}
            >
              {this.state.importtimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://discussions.apple.com/thread/250216099"
                  >
                    import
                  </a>{" "}
                  then turn
                </span>
              )}
              {space}
              <span
                style={{
                  transform: "translateY(20px)"
                }}
              >
                imp
              </span>
            </div>

            <div
              onMouseEnter={
                () =>
                  this.setState({ crypttimeout: true }, () => {
                    clearTimeout(this.crypttimeout);
                    this.crypttimeout = setTimeout(() => {
                      this.setState({ crypttimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 0px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "400px"
              }}
            >
              {this.state.crypttimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://vaults.quora.com/Even-with-local-private-keys-cant-the-geth-Ethereum-network-store-developer-transfer-unrecoverable-wallet-funds-to-a"
                  >
                    ?
                  </a>
                  {space}EIP/
                  <a
                    style={{ color: "white" }}
                    href="https://eips.ethereum.org/EIPS/eip-1155"
                  >
                    ERC
                  </a>
                  {space}token{space}
                  <a
                    style={{ color: "white" }}
                    href="https://anchor.fm/micro-theory/episodes/Strategic-Voting-with-a-potential-network-effect-and-new-antifinance-alternative-e1qvulq"
                  >
                    rules
                  </a>
                </span>
              )}
              {space}
              <span
                style={{
                  transform: "translateY(20px)"
                }}
              >
                crypt
              </span>
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ screentimeout: true }, () => {
                    clearTimeout(this.screentimeout);
                    this.screentimeout = setTimeout(() => {
                      this.setState({ screentimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 0px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "370px"
              }}
            >
              {this.state.screentimeout && (
                <span>
                  Quicktime screen recording `win+
                  <span style={{ textDecoration: "line-through" }}>shift</span>
                  ctrl+esc`{space}
                  <a
                    style={{ color: "white" }}
                    href="https://studio.moises.ai/upload/split/"
                  >
                    in-microphone
                  </a>
                </span>
              )}
              {space}
              <span
                style={{
                  transform: "translateY(20px)"
                }}
              >
                scr
              </span>
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ jstimeout: true }, () => {
                    clearTimeout(this.jstimeout);
                    this.jstimeout = setTimeout(() => {
                      this.setState({ jstimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 0px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "310px"
              }}
            >
              {this.state.jstimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://github.com/nickcarducci"
                  >
                    new Promise(r={">"} r(JSON.stringify))
                  </a>
                </span>
              )}
              {space}
              <span
                style={{
                  transform: "translateY(20px)",
                  fontSize: "40px"
                }}
              >
                JS
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ emailtimeout: true }, () => {
                    clearTimeout(this.emailtimeout);
                    this.emailtimeout = setTimeout(() => {
                      this.setState({ emailtimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 0px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "270px",
                height: "20px",
                minWidth: "30px"
              }}
            >
              {this.state.emailtimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://answers.netlify.com/t/support-guide-how-can-i-receive-emails-on-my-domain/178"
                  >
                    OLD TTL "propogation"
                  </a>
                  {space}/ 3600 (
                  <a
                    style={{ color: "white" }}
                    href="https://answers.netlify.com/t/setting-icloud-up-with-my-domain-spf-issue/49162/7?u=nickcarducci"
                  >
                    icloud+
                  </a>
                  /migadu)
                </span>
              )}
              {space}
              <span
                style={{
                  top: "-15px",
                  position: "absolute",
                  fontSize: "40px"
                }}
              >
                &#9993;
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ traptimeout: true }, () => {
                    clearTimeout(this.traptimeout);
                    this.traptimeout = setTimeout(() => {
                      this.setState({ traptimeout: false });
                    }, 5000);
                  }) //scopebook
              }
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
                right: "20px",
                bottom: "230px"
              }}
            >
              {this.state.traptimeout && (
                <span>
                  <a style={{ color: "white" }} href="https://codesandbox.io/">
                    inspect hidden divs / rename sandbox loops /
                    `prettier-ignore` one line
                  </a>
                </span>
              )}
              {space}?{/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ sidemenutimeout: true }, () => {
                    clearTimeout(this.sidemenutimeout);
                    this.sidemenutimeout = setTimeout(() => {
                      this.setState({ sidemenutimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                borderLeft: "5px solid red",
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "190px"
              }}
            >
              {this.state.sidemenutimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://codesandbox.io/s/vau-money-jwi5k?file=/src/Frame.js"
                  >
                    sidemenu repo
                  </a>
                </span>
              )}
              {space}
              <span role="img" aria-label="masks">
                🎭
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ frametimeout: true }, () => {
                    clearTimeout(this.frametimeout);
                    this.frametimeout = setTimeout(() => {
                      this.setState({ frametimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              onClick={this.props.setWhy}
              style={{
                border: "5px solid red",
                zIndex: "1",
                userSelect: "none",
                backgroundColor: "rgb(65, 90, 159)",
                color: "white",
                borderRadius: "10px",
                padding: "4px 6px",
                cursor: "pointer",
                position: "fixed",
                right: "20px",
                bottom: "140px"
              }}
            >
              {this.state.frametimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://codesandbox.io/s/scopebook-timeclock-yxv61i?file=/src/Frame.js"
                  >
                    frame repo
                  </a>
                </span>
              )}
              {space}
              <span role="img" aria-label="masks">
                🎭
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ anontimeout: true }, () => {
                    clearTimeout(this.anontimeout);
                    this.anontimeout = setTimeout(() => {
                      this.setState({ anontimeout: false });
                    }, 5000);
                  }) //scopebook
              }
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
                right: "20px",
                bottom: "100px"
              }}
            >
              {this.state.anontimeout && (
                <span>
                  <a
                    style={{ color: "white" }}
                    href="https://codesandbox.io/s/react-local-firebase-i7l8qe?file=/src/App.js"
                  >
                    auth repo
                  </a>
                </span>
              )}
              {space}
              <span role="img" aria-label="masks">
                🎭
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ runscreenshottimeout: true }, () => {
                    clearTimeout(this.runscreenshottimeout);
                    this.runscreenshottimeout = setTimeout(() => {
                      this.setState({ runscreenshottimeout: false });
                    }, 5000);
                  }) //scopebook
              }
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
                right: "20px",
                bottom: "60px"
              }}
            >
              {this.state.runscreenshottimeout && (
                <a
                  style={{ color: "white" }}
                  href="https://www.lifewire.com/take-screenshot-using-dev-tools-on-google-chrome-5097913"
                >
                  run command {">"} screenshot
                </a>
              )}
              {space}
              &#128247;
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ designUItimeout: true }, () => {
                    clearTimeout(this.designUItimeout);
                    this.designUItimeout = setTimeout(() => {
                      this.setState({ designUItimeout: false });
                    }, 5000);
                  }) //scopebook
              }
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
                right: "20px",
                bottom: "20px"
              }}
            >
              {this.state.designUItimeout && (
                <span>
                  Monokai 10px PreviewEdit off (change file name if freeze)
                  {space}
                  <a
                    style={{ color: "white" }}
                    href="https://github.com/NickCarducci/commie.dev"
                  >
                    boiler repo
                  </a>
                </span>
              )}
              {space}
              &image;{/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onMouseEnter={
                () =>
                  this.setState({ nodeDevtimeout: true }, () => {
                    clearTimeout(this.nodeDevtimeout);
                    this.nodeDevtimeout = setTimeout(() => {
                      this.setState({ nodeDevtimeout: false });
                    }, 5000);
                  }) //scopebook
              }
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
                left: "20px",
                bottom: "20px"
              }}
            >
              &infin;{space}
              {this.state.nodeDevtimeout && (
                <a
                  style={{ color: "white" }}
                  href="https://github.com/NickCarducci/mastercard-backbank-digital-ocean"
                >
                  node repo
                </a>
              )}
            </div>
          </div>
          <div
            style={{
              maxWidth: "100%",
              opacity: ".6",
              position: "relative",
              width: "min-content"
            }}
          >
            <div
              style={{
                right: "0px",
                position: "absolute",
                width: "50px",
                fontSize: "12px"
              }}
            >
              as low as $1/mo!
            </div>
            <div
              style={{
                right: "-80px",
                position: "absolute",
                width: "50px",
                fontSize: "12px"
              }}
            >
              pay for business cloudflare/mbps $200/month with 15{space}
              <a href="https://www.reddit.com/r/selfhosted/comments/xjl7lz/has_anyone_cloudflared_a_serverless_competitor_to/">
                renters
              </a>
            </div>
            <a
              href="https://commie.dev"
              style={{
                fontFamily: "'Nabla', cursive",
                backgroundColor: "rgb(65, 90, 159)"
              }}
            >
              stop paying monthly
            </a>
            {space}
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
                  style={{ color: this.state.served > 108 ? "black" : "grey" }}
                >
                  108: $2/mo
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
            the instance
            <br />
            <i>on the $150 device that you used</i>.
            <br />
            <br />
          </div>
        </div>
        {!this.state.chosenFeature && (
          <div>
            <span style={{ textDecoration: "underline" }}>support</span>
            <br />
            latest release node.js (
            <i
              style={{ cursor: "pointer" }}
              onBlur={() => this.setState({ hoveringplanning: false })}
              onMouseEnter={() =>
                this.setState({ hoveringplanning: true }, () => {
                  clearTimeout(this.hoveringplanningtimeout);
                  this.hoveringplanningtimeout = setTimeout(() => {
                    this.setState({ hoveringplanning: false });
                  }, 1200);
                })
              }
            >
              <a href="https://blog.cloudflare.com/developer-spotlight-tejas-metha-cclip/">
                firebase
              </a>
            </i>
            )
            {this.state.hoveringplanning && (
              <span style={{ color: "grey" }}>
                {" "}
                - Cloudflare Service Workers Firebase Identity Provider
              </span>
            )}
          </div>
        )}
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
        <br />
        <i style={{ color: "grey" }}>nothing</i>
        {/*Security Assertion Markup Language (SAML) */}
      </div>
    );
  }
}
export default StopPayingMonthly;
