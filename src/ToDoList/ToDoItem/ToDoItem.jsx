import React, { Component } from 'react'
import './ToDoItem.scss'

export default class ToDoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className='ToDoItem col-12'>
        <div className='todo__item' tabindex='0'>
          <div className='todo__item--content'>Membuat Api</div>
          <div className='todo__item--actions'>
            <div className='icon icon__delete' title='Delete' tabindex='0'></div>
            <div className='icon icon__edit' title='Edit' tabindex='0'></div>
            <div className='icon icon__complete' title='Complete' tabindex='0'></div>
          </div>
        </div>
      </div>
    )
  }
}
