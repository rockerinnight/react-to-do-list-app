import React, { Component } from 'react'
import './ToDoStatus.scss'

export default class ToDoDone extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className='ToDoStatus'>
        <div className='todo__status todo__status--done col'>Todo Done : 50</div>
      </div>
    )
  }
}
