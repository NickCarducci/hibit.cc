import React from "react";

class StopPayingMonthly extends React.Component {
  state = { served: 0, hovPayments: true };
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
    clearTimeout(this.screentimeout);
    clearTimeout(this.importtimeout);
    clearTimeout(this.rusttimeout);
    clearTimeout(this.csstimeout);
    clearTimeout(this.promisetimeout);
    clearTimeout(this.reducetimeout);
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
    const itemStyle = {
      top: "0px",
      //transform: "translate(0%,0%) rotate(90deg)",
      textAlign: "right",
      userSelect: "none",
      backgroundColor: "rgb(65, 90, 159)",
      color: "white",
      margin: "4px 10px",
      borderRadius: "10px",
      padding: "4px 10px",
      cursor: "pointer",
      width: "max-content",
      float: "right"
    };
    const timeoutThis = (name, timeout) => {
      const title = name; //+ "Timeout";
      this.setState({ fanfare: title }, () => {
        clearTimeout(this[title]);
        this[title] = setTimeout(() => {
          this.setState({ fanfare: false });
        }, 5000);
      });
    }; //scopebook
    console.log(this.props.availHeight, this.props.width);
    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <span
          //zIndex: "1", i'd rather my foot in your mouth than an A+
          //onClick={() => timeoutThis("firewallplusTimeout")}
          /*
                  firewallPlustimeout:
                    this.state.firewallPlustimeout === true
                      ? 1
                      : !this.state.firewallPlustimeout */
          style={{
            position: "fixed",
            textAlign: "right",
            top: "30px",
            right: "10px",
            transition: ".3s ease-out",
            justifyContent: "space-between",
            width: "max-content",
            maxWidth: Math.min(400, this.props.width),
            zIndex: "1",
            userSelect: "none",
            backgroundColor: "rgb(65, 90, 159)",
            color: "white",
            borderRadius: "10px",
            padding: "4px 6px",
            cursor: "pointer"
          }}
        >
          {this.state.fanfare === "firewallPlustimeout" ? (
            <a
              style={{ color: "white" }}
              href="https://github.com/w3c/strategy/issues/358"
            >
              all-methods-local-proxy
            </a>
          ) : (
            this.state.fanfare === "firewallPlustimeout" && (
              <a
                style={{ color: "white" }}
                href="https://www.nginx.com/learn/waf-web-application-firewall/"
              >
                Config Web Firewall
              </a>
            )
          )}

          {this.state.fanfare === "designUITimeout" ? (
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
          ) : this.state.fanfare === "runscreenshotTimeout" ? (
            <a
              style={{ color: "white" }}
              href="https://www.lifewire.com/take-screenshot-using-dev-tools-on-google-chrome-5097913"
            >
              run command {">"} screenshot
            </a>
          ) : this.state.fanfare === "anonTimeout" ? (
            <span>
              <a
                style={{ color: "white" }}
                href="https://codesandbox.io/s/react-local-firebase-i7l8qe?file=/src/App.js"
              >
                auth repo
              </a>
            </span>
          ) : this.state.fanfare === "frameTimeout" ? (
            <span>
              <a
                style={{ color: "white" }}
                href="https://codesandbox.io/s/scopebook-timeclock-yxv61i?file=/src/Frame.js"
              >
                frame repo
              </a>
            </span>
          ) : this.state.fanfare === "sidemenuTimeout" ? (
            <span>
              <a
                style={{ color: "white" }}
                href="https://codesandbox.io/s/vau-money-jwi5k?file=/src/Frame.js"
              >
                sidemenu repo
              </a>
            </span>
          ) : this.state.fanfare === "trapTimeout" ? (
            <span>
              <a style={{ color: "white" }} href="https://codesandbox.io/">
                inspect hidden divs / rename sandbox loops / `prettier-ignore`
                one line
              </a>
            </span>
          ) : this.state.fanfare === "emailTimeout" ? (
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
          ) : this.state.fanfare === "jsTimeout" ? (
            <span>
              <a
                style={{ color: "white" }}
                href="https://github.com/nickcarducci"
              >
                new Promise(r={">"} r(JSON.stringify))
              </a>
            </span>
          ) : this.state.fanfare === "cssTimeout" ? (
            <span>
              Div’s offsetHeight is is just that, to the parent div.
              <br />
              Only position:”relative” holds absolute children in place
            </span>
          ) : this.state.fanfare === "screenTimeout" ? (
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
          ) : this.state.fanfare === "cryptTimeout" ? (
            <span>
              <a
                style={{ color: "white" }}
                href="https://vaults.quora.com/Even-with-local-private-keys-cant-the-geth-Ethereum-network-store-developer-transfer-unrecoverable-wallet-funds-to-a"
              >
                vault-co.in
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
          ) : this.state.fanfare === "importTimeout" ? (
            <span>
              <a
                style={{ color: "white" }}
                href="https://discussions.apple.com/thread/250216099"
              >
                import
              </a>{" "}
              then turn
            </span>
          ) : this.state.fanfare === "rustTimeout" ? (
            <span>Struct objects per field instantiate implementations</span>
          ) : this.state.fanfare === "promiseTimeout" ? (
            <span>
              Promise.all(await stuff.map(x={">"}new Promise(r={">"}
              {"{"}
              const done = JSON.stringify({}) return r(done){"}"})))
            </span>
          ) : this.state.fanfare === "reduceTimeout" ? (
            <span style={{}}>
              {`{
                  ...Object.keys(address).reduce(
                    (remaining, next) =>
                      Object.assign(remaining, {
                        [next]: address[next]
                          ? address[next]
                          : ""
                      })
                    ,
                    address
                  )
                }`}
            </span>
          ) : (
            <span
              style={{
                paddingLeft: "6px"
              }}
              onClick={this.props.setWhy}
            >
              {this.state.firewallPlustimeout && `  `}
              why?
            </span>
          )}
          <div
            style={{
              textAlign: "right",
              width:
                this.props.availHeight < 300
                  ? "160px"
                  : this.props.availHeight < 400
                  ? "120px"
                  : "80px",
              height: Math.min(this.props.availHeight, 600),
              top: "80px",
              right: "0px",
              position: "absolute",
              columnCount:
                this.props.availHeight < 300
                  ? 4
                  : this.props.availHeight < 400
                  ? 3
                  : 2
              //display: "flex",
              //flexWrap: "wrap"
              //transform: "rotate(90deg)" //translate(0%,0%)
            }}
          >
            <div onClick={() => timeoutThis("reduceTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)"
                  }
                }
              >
                reduce
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div
              onClick={() => timeoutThis("promiseTimeout")}
              style={itemStyle}
            >
              <span
                style={
                  {
                    //transform: "translateY(20px)"
                  }
                }
              >
                json promise all
              </span>
            </div>
            <div onClick={() => timeoutThis("rusticTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)"
                  }
                }
              >
                rustic
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div onClick={() => timeoutThis("importTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)"
                  }
                }
              >
                imp
              </span>
            </div>

            <div onClick={() => timeoutThis("cryptTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)"
                  }
                }
              >
                crypt
              </span>
            </div>
            <div onClick={() => timeoutThis("screenTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)"
                  }
                }
              >
                scr
              </span>
            </div>
            <div onClick={() => timeoutThis("cssTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)",
                    //fontSize: "40px"
                  }
                }
              >
                Css
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div onClick={() => timeoutThis("jsTimeout")} style={itemStyle}>
              <span
                style={
                  {
                    //transform: "translateY(20px)",
                    //fontSize: "40px"
                  }
                }
              >
                JS
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div onClick={() => timeoutThis("emailTimeout")} style={itemStyle}>
              <span
                style={{
                  lineHeight: "10px",
                  //top: "-15px",
                  //position: "absolute",
                  fontSize: "20px"
                }}
              >
                &#9993;
              </span>
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <div onClick={() => timeoutThis("trapTimeout")} style={itemStyle}>
              d
            </div>
            <div
              onClick={() => timeoutThis("sidemenuTimeout")}
              style={itemStyle}
            >
              <span role="img" aria-label="masks">
                🎭
              </span>
            </div>
            {/*
            <div
              onClick={
                () =>
                  this.setState({ frametimeout: true }, () => {
                    clearTimeout(this.frametimeout);
                    this.frametimeout = setTimeout(() => {
                      this.setState({ frametimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              
              style={itemStyle}
            >
              <span role="img" aria-label="masks">
                🎭
              </span>
            </div>
            <div
              onClick={
                () =>
                  this.setState({ anontimeout: true }, () => {
                    clearTimeout(this.anontimeout);
                    this.anontimeout = setTimeout(() => {
                      this.setState({ anontimeout: false });
                    }, 5000);
                  }) //scopebook
              }
              
              style={itemStyle}
            >
              <span role="img" aria-label="masks">
                🎭
              </span>
              {/**how do I set up a react app (commie.dev + netlify) 
            </div>*/}
            <span
              role="img"
              aria-label="camera"
              onClick={() => timeoutThis("runscreenshotTimeout")}
              style={itemStyle}
            >
              &#128247;
            </span>
            <div
              onClick={() => timeoutThis("designUITimeout")}
              style={itemStyle}
            >
              &image;
              {/**how do I set up a react app (commie.dev + netlify) */}
            </div>
            <a
              style={{
                ...itemStyle,
                marginTop: "12px",
                fontSize: "12px",
                transform: "rotate(90deg)"
              }}
              href="https://stackoverflow.com/questions/38864033/whats-the-proper-way-of-passing-a-ref-to-a-prop/55621873"
            >
              react
            </a>
          </div>
        </span>
        <div style={{ width: "100%", position: "relative" }}>
          Don't good ideas destroy market benefits for use utility?
          <span
            style={{
              transition: ".3s ease-in",
              fontSize: !this.props.scrolling ? "" : "0px",
              zIndex: "1",
              userSelect: "none",
              backgroundColor: "rgb(65, 90, 159)",
              color: "white",
              borderRadius: "10px",
              padding: "4px 6px",
              cursor: "pointer",
              position: "fixed",
              left: "20px",
              bottom: "135px"
            }}
          >
            <div
              style={{
                padding: "8px",
                color: "rosybrown", // "lightcoral",  // "palevioletred",
                backgroundColor: "lightsteelblue",
                transition: ".3s ease-in",
                maxWidth: "90vw",
                width: "max-content",
                fontSize: this.state.openCloudflare ? "12px" : "0px",
                position: "absolute",
                top: "-195px"
              }}
            >
              {`
              curl -X POST "https://api.cloudflare.com/client/v4/$URI" \\
                -H 'X-Auth-Key:  <YOUR_KEY>' \\ 
                -H 'X-Auth-Email: <YOUR_EMAIL>’ \\
                -H 'Content-Type: application/json' \\
                -d '{
                "ns_name": "dns1.p01.nsone.net",
                "ns_name": "dns2.p01.nsone.net", 
                "ns_name": "dns3.p01.nsone.net",
                "ns_name": "dns4.p01.nsone.net"
                }'`
                .split("\n")
                .map((x, i) => (
                  <span>
                    {i === 0 ? ` URI = "accounts/` : ""}
                    {i === 0 ? (
                      //WHOIS partnership person beneficiary (to avoid probate) vau.money/login, /docs
                      <a href="https://markethistory.quora.com/Is-Cloudflare-as-a-registrar-worth-the-support-lock-in-to-store-WHOIS-information-at-another-build-and-deploy-companys">{`<YOUR_ACCOUNT>`}</a>
                    ) : (
                      ""
                    )}
                    {i === 0 ? `/custom_ns"` : ""}

                    {i === 1 ? (
                      <a href="https://developers.cloudflare.com/dns/additional-options/custom-nameservers/">
                        <span role="img" aria-label="pig">
                          🐷
                        </span>
                      </a>
                    ) : i === 5 ? (
                      <span>
                        <a href="https://netlify.com">deploy</a>
                        {space}
                        <a href="https://namecheap.com">domains</a>
                      </span>
                    ) : (
                      ""
                    )}
                    {
                      x //.replaceAll("/", "")
                    }
                    <br />
                  </span>
                ))}
            </div>
            <span
              style={{
                direction: "ltr"
              }}
            >
              <div
                onMouseEnter={() => clearTimeout(this.hovPayments)}
                style={{
                  display:
                    this.state.fanfare === "hovPayments" ? "flex" : "none",
                  justifyContent: "flex-end",
                  flexWrap: "wrap-reverse",
                  direction: "rtl",
                  maxWidth: "90vw",
                  width: "max-content",
                  position: "absolute",
                  color: "black",
                  fontSize: "12px",
                  bottom: "40px"
                }}
              >
                {`I’m not interested in platform charges but for fees and
              subscriptions, this ticket pertains to direct charges. [Each
              Connect account has its own routing and account number. Standard
              accounts cannot Issue cards and are free, however; developers must
              clone accounts to a Custom type that begins at $2/mo to “accept
              TOS for card_issuing” to then spend money other than by either ACH
              payouts or in the Connect app. All (Custom, Express, and Standard)
              accounts can receive funds by routing and account number.] When
              enabling card_issuing for a Custom account the developer must
              accept the terms of Celtic Bank member FDIC (the subject of this
              ticket) on behalf of the users. I just want to know from you if
              deposits are held by Celtic Bank when codified for either Standard
              or Custom accounts; are received funds (by either routing and
              account direct, user-codified, either ACH payouts or connect) held
              with Celtic Bank, when an account is Custom alone, or specifically
              when tos_card_issuance is accepted? I can assume Celtic Bank FDIC
              does “invest” with the capital, as users’ linked bank/card
              accounts for top offs/payouts do, I can assert from extensive
              research in the payments industry before finally knowing fremium
              marketplace facilitators must use Stripe, and those banks lend
              deposits instead of take fees to operate, which is fully haram
              against cash-current non-responsive third party donee
              beneficiaries surrendered for factors’ immaterial marginal utility
              value benefit.`
                  .replaceAll("\n", " ")
                  .replaceAll(/[ ]+/g, " ")
                  .replaceAll(" ", " ~/")
                  .split("~/")
                  .reverse()
                  .map((x) => (
                    <span
                      style={{
                        direction: "ltr",
                        margin: "0px 2px"
                      }}
                    >
                      {x}
                    </span>
                  ))}
              </div>
            </span>
            <div
              style={{
                display:
                  this.state.fanfare !== "hovPayments" ? "block" : "none",
                maxWidth: "90vw",
                width: "max-content",
                position: "absolute",
                color: "black",
                fontSize: "12px",
                top: "-60px"
              }}
            >
              no caught runtime exception (results CORS error) usually are
              undefined
              <br />
              webhook{space}
              <a href="https://www.quora.com/unanswered/Can-you-call-to-resolve-an-asynchronous-function-from-Express-middleware-thats-declared-in-the-Node-js-process-scope">
                /chute
              </a>
              {space}settings (holler) <br />
              Don't{space}
              <a href="https://developers.cloudflare.com/pages/platform/api/#make-requests">
                sweat
              </a>
              , your{space}
              <a href="https://developers.cloudflare.com/fundamentals/api/how-to/make-api-calls/">
                Bearer
              </a>
              {space}token
              {space}
              <i
                onClick={() =>
                  this.setState({ openCloudflare: !this.state.openCloudflare })
                }
                style={{ textDecoration: "underline" }}
              >
                and your 'X-Auth-Key'
              </i>
              {space}is usually{space}
              <a href="https://developers.cloudflare.com/fundamentals/api/reference/permissions/">
                your
              </a>
              {space}global key
            </div>
            <a
              onMouseEnter={() => timeoutThis("hovPayments", 5000)}
              href="https://vau.money/docs"
              style={{ color: "lightskyblue" }}
            >
              Payments
            </a>
            &nbsp; &nbsp;
            <span onClick={() => this.setState({ fanfare: false })}>x</span>
          </span>
          <div
            style={{
              float: "right",
              display: !this.state.fanfare ? "block" : "none",
              maxWidth: "100px",
              width: "90vw",
              position: "relative",
              color: "black",
              fontSize: "12px",
              top: "0px"
            }}
          >
            Your count of collection document Array is upon resolved promise
            then (edit a counter
            setDoc(doc(getFirestore(firebase),"surnamePrefixCount","only")),
            {"{prefixCount:increment}"})<br />
            {"//"}avoid size
          </div>
          <span
            style={{
              transition: ".3s ease-in",
              fontSize: !this.props.scrolling ? "" : "0px",
              zIndex: "1",
              userSelect: "none",
              backgroundColor: "rgb(65, 90, 159)",
              color: "white",
              borderRadius: "10px",
              padding: "4px 6px",
              cursor: "pointer",
              position: "fixed",
              left: "20px",
              bottom: "100px"
            }}
          >
            and now,
            {space}
            <a
              style={{
                color: "white"
              }}
              href="https://vau.money/login"
            >
              get your finances right
            </a>
          </span>
          <div
            onClick={() => timeoutThis("nodedevTimeout")}
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
              bottom: "60px"
            }}
          >
            &infin;{space}
            {this.state.nodeDevtimeout && (
              <a
                style={{ color: "white" }}
                href="https://github.com/NickCarducci/mastercard-backbank-digital-ocean-app"
              >
                node repo
              </a>
            )}
          </div>
          <div
            onClick={() => timeoutThis("nodedevTimeout")}
            style={{
              zIndex: "1",
              userSelect: "none",
              backgroundColor: "rgb(65, 90, 159)",
              color: "gold",
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
                nginx repo
              </a>
            )}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgba(80,30,160,.2)",
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
        {!this.state.chosenFeature && (
          <div>
            <span style={{ textDecoration: "underline" }}>support</span>
            <br />
            latest release node.js (
            <i
              style={{ cursor: "pointer" }}
              onBlur={() => this.setState({ hoveringplanning: false })}
              onClick={() =>
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
        <a href="https://courttechnology.quora.com/Can-another-person-force-someone-into-bankruptcy-not-the-state-1">
          <i style={{ color: "grey" }}>nothing</i>
        </a>
        {/*Security Assertion Markup Language (SAML) */}
      </div>
    );
  }
}
export default StopPayingMonthly;
