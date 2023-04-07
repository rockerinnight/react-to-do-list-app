import React, { Component } from 'react'
import './ToDoInput.scss'

export default class ToDoInput extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className='ToDoInput'>
        <input type='text' placeholder='What is your next task?' />
        <button type='button' className='btn__add'>
          Add
        </button>
      </div>
    )
  }
}
