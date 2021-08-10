//Use rce to genreate a class based component from react snippets
import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {


  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
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
