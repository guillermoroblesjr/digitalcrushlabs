import React, { Component, PropTypes } from 'react'
import _isEqual from 'lodash.isEqual'
import './<%= pascalEntityName %>.scss'

export default class <%= pascalEntityName %> extends Component {
  // static propTypes = {
  //   reduxState: PropTypes.shape({
  //     router: PropTypes.object.isRequired,
  //   }),
  //   reduxActions: PropTypes.shape({
  //     actionName: PropTypes.func.isRequired,
  //   }),
  // }
  // static defaultProps = {}

  constructor (props) {
    super(props)
    this.fileIdentifier = `<%= pascalEntityName %>.jsx`
    this.state = {}
  }

  shouldComponentUpdate = (nextProps, nextState) =>
    !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState)

  shouldRenderNull = () => false

  render = () => {
    if (this.shouldRenderNull()) return null
    return (
      <div className="<%= pascalEntityName %>"><%= pascalEntityName %></div>
    )
  }
}
