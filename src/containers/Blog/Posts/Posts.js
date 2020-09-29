import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import "./Posts.module.css";
import { Link } from "react-router-dom";

class Posts extends Component {
    state = { posts: [] }

    postSelectedHandler = (id) => this.setState({selectedPostId: id});

    async componentDidMount() {
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            const posts = data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {...post, author: "Yurniel"};
            });
            this.setState({posts: updatedPosts});
        } catch (e) {
            // this.setState({error: true});
            console.error(`ERROR: ${e}`);
        }
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Link to={"/" + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;