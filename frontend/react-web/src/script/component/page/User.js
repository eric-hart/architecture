import React from 'react';

import Link from '~/component/common/Link';

import Insert from '~/connect/user/Insert';
import Update from '~/connect/user/Update';
import Search from '~/connect/user/Search';
import Select from '~/connect/user/Select';

class User extends React.Component {
  render() {
    return (
      <div>
        <Insert />
        <Update />
        <Search />
        <Select />
        <Link to="/">index</Link>
        <Link to="/user">user</Link>
      </div>
    );
  }
}

export default User;
