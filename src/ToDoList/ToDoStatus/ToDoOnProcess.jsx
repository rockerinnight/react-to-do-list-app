import React, { Component } from 'react'
import './ToDoStatus.scss'

export default class ToDoOnProcess extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className='ToDoStatus'>
        <div className='todo__status todo__status--on-process col'>Todo On Progress : 50</div>
      </div>
    )
  }
}
