import React from "react";
import { RouteHandler, Link } from "react-router";
import { prefixLink } from "gatsby-helpers";
import "./style.css";

class SiteNav extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link
              to={prefixLink("/")}
              activeClassName="current"
              onlyActiveOnIndex
            >
              {" "}
              Articles
            </Link>
          </li>
          <li>
            <Link to={prefixLink("/about/")} activeClassName="current">
              {" "}
              About Me
            </Link>
          </li>
          <li>
            <Link to={prefixLink("/resume/")} activeClassName="current">
              {" "}
              Resume
            </Link>
          </li>
          <li>
            <Link to={prefixLink("/portfolio/")} activeClassName="current">
              {" "}
              Portfolio
            </Link>
          </li>
          <li>
            <Link to={prefixLink("/uses/")} activeClassName="current">
              {" "}
              Uses
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

SiteNav.propTypes = {
  location: React.PropTypes.object
};

export default SiteNav;
