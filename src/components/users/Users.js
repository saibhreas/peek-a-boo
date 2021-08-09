//Use rce to genreate a class based component from react snippets
import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo',
      },
      {
        id: '2',
        login: 'ezmobius',
        avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
        html_url: 'https://github.com/ezmobius',
      },
      {
        login: 'wycats',
        avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
        html_url: 'https://github.com/wycats',
      },
      {
        id: '4',
        login: 'pjhyett',
        avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett',
      },
      {
        id: '5',
        login: 'defunkt',
        avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt',
      },
      {
        id: '6',
        login: 'saibhreas',
        avatar_url: 'https://avatars.githubusercontent.com/u/74072744?v=4',
        html_url: 'https://github.com/saibhreas',
      }
    ],
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap:'1rem'
}

export default Users;
