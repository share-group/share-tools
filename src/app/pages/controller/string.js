import React from 'react';

export default class extends React.Component {
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  render() {
    return (
      <div>fffffffffffffffffffffffff
      </div>
    );
  }
}
