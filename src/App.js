// https://medium.com/quick-code/build-simple-react-js-application-in-5-minutes-f9abfc2d018a
// https://www.blog.duomly.com/how-to-create-react-app-in-5-minutes/

/*
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          posts: json,
        })
      );
  }

  render() {
    const { posts } = this.state;
    return (
      <div className='app'>
        <div className='container'>
          <h1>Blog</h1>
          {posts.map((post) => (
            <div className='card' id={`post-${post.id}`} key={post.id}>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-body'>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
*/

// https://www.blog.duomly.com/graphql-tutorial-reactjs-course/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const getUserColor = (userId) => {
    let color;
    switch (userId) {
      case 1:
        color = 'greyBg';
        break;
      case 2:
        color = 'yellowBg';
        break;
      default:
        color = 'redBg';
    }

    return color;
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className='container'>
      {posts.map((post) => (
        <div
          key={post.id}
          id={`post-${post.id}`}
          className={`post-section ${getUserColor(post.userId)}`}
        >
          <p>
            #Post ID:{post.id} #UserID: {post.userId}
          </p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
*/

// https://fabisiakradoslaw.medium.com/understand-react-hooks-in-a-few-minutes-and-use-it-from-now-5020df968486
// https://www.blog.duomly.com/react-hooks-tutorial-with-examples/

/*
import React, { useEffect, useState } from 'react';
import './bank.css';

const App = () => {
  const [balance, setBalance] = useState(1500);
  const [savingBalance, setSavingBalance] = useState(500);
  const [notification, setNotfication] = useState(false);

  const handleSaving = () => {
    if (balance > 1000) {
      setBalance(balance - 100);
      setSavingBalance(savingBalance + 100);
    }
  };

  const handleSpending = () => {
    setBalance(balance + 100);
    setSavingBalance(savingBalance - 100);
  };

  useEffect(() => {
    if (balance <= 1000) {
      setNotfication(true);
    }
  }, [balance]);

  return (
    <div className='container'>
      <div className='notification-section'>
        {notification && (
          <div className='notification'>
            <button onClick={() => setNotfication(false)}>X</button>
            <p>Balance too low, cannot transfer anymore</p>
          </div>
        )}
      </div>
      <div className='balance'>
        <div className='col balance-section'>
          <h4 className='title'>My Balance</h4>
          <p>${balance}</p>
          <button className='btn' onClick={() => handleSaving()}>
            Spend $100
          </button>
        </div>
        <div className='col saving-balance-section'>
          <h4 className='title'>My Saving Balance</h4>
          <p>${savingBalance}</p>
          <button className='btn' onClick={() => handleSpending()}>
            Spend $100
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
*/
