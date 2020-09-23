import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.id) {
            // To avoid the infinite loop
            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
                try {
                    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`);
                    const post = await response.json();
                    this.setState({post});
                } catch (e) {
                    console.error(`ERROR: ${e}`)
                }
            }
        }
    }

    deletePostHandler = async () => {
        try {
            await (await fetch(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`, { method: "DELETE"})).json();
        } catch (e) {
            console.error(`ERROR: ${e}`)
        }
    };

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
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;