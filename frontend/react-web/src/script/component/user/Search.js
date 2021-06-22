import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleIdInputChange = this.handleIdInputChange.bind(this);
  }

  handleIdInputChange(e) {
    this.props.changeId(e.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" id="serach" placeholder="id" onChange={(e) => this.handleIdInputChange(e)} />
        <button onClick={this.props.selectById.bind(this, this.props.id)}>search</button>
      </div>
    );
  }
}

export default Search;
