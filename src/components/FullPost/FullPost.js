import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            // To avoid the infinite loop
            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
                fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                    .then(response => response.json())
                    .then(post => this.setState({post}))
                    .catch(e => console.log(e));
            }
        }
    }

    render () {
        let post = <p style={{textAlign: "center"}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p>Loading...</p>
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;