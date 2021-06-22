import React from 'react';

import Link from '~/component/common/Link';

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <Link to="/">index</Link>
        <Link to="/user">user</Link>
      </div>
    );
  }
}

export default Home;
