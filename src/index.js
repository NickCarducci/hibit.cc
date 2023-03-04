import React, { useEffect, useState /*, { useEffect, useRef }*/ } from "react";
import { UAParser } from "ua-parser-js";
import { createRoot } from "react-dom/client";
//import { createPortal } from "react-dom";
import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import App from "./App";
//import Filament from "./ifilament.js";

import StopPayingMonthly from "./StopPayingMonthly.js";

class PathRouter extends React.Component {
  state = { why: true };
  componentDidUpdate = () => {
    const { pathname } = this.state;
    if (this.state.lastPathname !== pathname && pathname) {
      this.setState({ lastPathname: pathname }, () => {
        this.toPathname(pathname);
      });
    }
  };
  toPathname = (pathname) => {
    this.setState({ pathname });
  };
  componentDidMount = () => {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  render() {
    /**
     * Cloud Run comes with a generous free tier and is pay per use,
     * which means you only pay while a request is being handled on your container instance.
     * If it is idle with no traffic, then you don’t pay anything.
     * https://cloud.google.com/blog/topics/developers-practitioners/cloud-run-story-serverless-containers
     * Because jobs should not serve requests, the container should not listen on a port or start a web server.
     * https://cloud.google.com/run/docs/container-contract#jobs-exit
     *  The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable.
     * Container called exit(1).
     */
    return this.state.why ? (
      <StopPayingMonthly
        scrolling={this.state.scrolling}
        scrollTop={this.state.scrollTop}
        availHeight={this.props.availHeight}
        width={this.props.width}
        setWhy={() => this.setState({ why: false })}
      />
    ) : (
      <App
        setWhy={() => this.setState({ why: true })}
        pathname={this.state.pathname}
        openNROP={() =>
          this.setState({ why: true }, () => window.scrollTo(0, 0))
        }
      />
    );
  }
}

var parser = new UAParser();
const name = parser.getBrowser().name;
const getWidth = () =>
  name.includes("Safari") ? window.screen.availWidth - 20 : window.innerWidth;
const getHeight = () =>
  name.includes("Safari") ? window.screen.availHeight : window.innerHeight;
const ClassHook = () => {
  //window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let [width, setWidth] = useState(getWidth());
  let [height, setHeight] = useState(getHeight());
  useEffect(() => {
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setHeight(getHeight());
        setWidth(getHeight());
      }, 150);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <PathRouter
      paths={useParams()}
      l={useLocation()}
      n={useNavigate()}
      {...{
        height,
        lastWidth: width,
        width,
        availHeight: height
      }}
    />
  );
}; // "cannot be called inside a callback" <Hook/>
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        //exact
        path="/*"
        //children,render
        element={<ClassHook />} //Initelement
      />
    </Routes>
  </BrowserRouter>
);
