import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem to connect to API');
            }
        })
            .then(posts => this.setState({posts}))
            .catch(e => console.log(e));
    }

    render () {
        const posts = this.state.posts.map(post => {
            return <Post key={post.id} title={post.title} />;
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;