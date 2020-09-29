import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"; // Unlike NavLink, Link does not allow to style anchors
import { Route, NavLink } from "react-router-dom";
import './Blog.module.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import Post from "./FullPost/FullPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    exact
                                    // activeClassName="my=active" // Customize active class name
                                    // activeStyle={{color: "red"}} // Inline style for active class
                                >Home
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</1> />} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;