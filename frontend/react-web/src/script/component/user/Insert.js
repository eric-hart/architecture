import React from 'react';

class Insert extends React.Component {
  constructor(props) {
    super(props);

    this.handleIdInputChange = this.handleIdInputChange.bind(this);
    this.handleNameInputChange = this.handleNameInputChange.bind(this);
  }

  handleIdInputChange(e) {
    this.props.changeId(e.target.value);
  }

  handleNameInputChange(e) {
    this.props.changeName(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="id" onChange={(e) => this.handleIdInputChange(e)} />
        <input type="text" placeholder="name" onChange={(e) => this.handleNameInputChange(e)} />
        <button onClick={this.props.insert.bind(this, this.props.user)}>insert</button>
      </div>
    );
  }
}

export default Insert;
