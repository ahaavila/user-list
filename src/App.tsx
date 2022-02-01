import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsers } from './actions';

import './App.css';

// eslint-disable-next-line no-shadow
function App({ users, getUsers }: any) {
  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="App">
      <h1>oi</h1>
    </div>
  );
}

const mapStateToProps = (store: any) => {
  return {
    users: store.users.users,
  };
};

export default connect(mapStateToProps, { getUsers })(App);
