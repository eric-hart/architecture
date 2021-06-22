import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], };
  }

  componentDidMount() {
    this.props.selectAll();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    nextProps.users.then((users) => {
      this.setState((state, props) => ({
        users,
      }));
    });
  }

  render() {
    let users;
    if (Array.isArray(this.state.users)) {
      users = this.state.users.map((user, index,) => {
        return (
          <div key={index}>
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>
              <button onClick={this.props.deleteById.bind(this, user.id,)}>
                delete
              </button>
            </span>
          </div>
        );
      });
    } else {
      users = (
        <div>
          <span>{this.state.users.id}</span>
          <span>{this.state.users.name}</span>
          <span>
            <button onClick={this.props.deleteById.bind(this, this.state.users.id,)}>
              delete
            </button>
          </span>
        </div>
      );
    }
    return (
      <div>
        {users}
      </div>
    );
  }
}

export default Select;
