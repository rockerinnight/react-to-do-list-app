import React, { Component } from 'react'
import './ToDoList.scss'

import ToDoInput from './ToDoInput/ToDoInput.jsx'
import ToDoDone from './ToDoStatus/ToDoDone.jsx'
import ToDoOnProcess from './ToDoStatus/ToDoOnProcess.jsx'
import ToDoItem from './ToDoItem/ToDoItem.jsx'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div className='ToDoList'>
        <div className='container text-center'>
          <div className='heading row'>
            <div className='col'>
              <h1>MY TO DO LIST</h1>
            </div>
          </div>
          <div className='input__container row'>
            <div className='col'>
              <ToDoInput />
            </div>
          </div>
          <div className='todo__container row'>
            <div className='col'>
              <div className='todo__status row  mb-2'>
                <div className='col pr-0 text-left'>
                  <ToDoDone />
                </div>
                <div className='col pl-0 text-left'>
                  <ToDoOnProcess />
                </div>
              </div>
              <div className='todo__list row'>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
