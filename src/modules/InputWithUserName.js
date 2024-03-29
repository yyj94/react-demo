import React, { Component } from 'react'
import wrapWithLoadData from '../components/wrapWithLoadData'

class InputWithUserName extends Component {
  render() {
    return <input value={this.props.data} />
  }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
export default InputWithUserName