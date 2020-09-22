import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem to connect to API');
            }
        })
            .then(data => {
                const posts = data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                        return {...post, author: "Yurniel"};
                    });
                this.setState({posts: updatedPosts});
            })
            .catch(e => console.log(e));
    }

    postSelectedHandler = (id) => this.setState({selectedPostId: id});

    render () {
        const posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
            />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;