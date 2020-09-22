import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('There was a problem to connect to API');
            }
        })
            .then(data => {
                console.log(data);
            })
            .catch(e => console.log(e));
    }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
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