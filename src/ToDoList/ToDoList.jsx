import React, { Component, createRef } from 'react'
import './ToDoList.scss'

import ToDoInput from './ToDoInput/ToDoInput.jsx'
import ToDoDone from './ToDoStatus/ToDoDone.jsx'
import ToDoOnProcess from './ToDoStatus/ToDoOnProcess.jsx'
import ToDoItem from './ToDoItem/ToDoItem.jsx'

export default class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.childRef = createRef()

    this.state = {
      inputText: '',
      todoList: [
        {
          id: 1,
          title: 'Drink morning coffee ☕',
          isDone: false
        },
        {
          id: 2,
          title: 'Daily reporting 📝',
          isDone: false
        }
      ],
      todoDone: 0,
      todoOnProcess: 0,
      isEditing: 0
    }
  }

  render() {
    const { inputText, todoList, isEditing } = this.state
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
              <ToDoInput
                ref={this.childRef}
                inputText={inputText}
                onChange={this.handleInputChange}
                onAdd={this.handleAdd}
              />
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
                {todoList.map((item) => (
                  <ToDoItem
                    key={item.id}
                    item={item}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                    onComplete={this.handleComplete}
                    isEditing={isEditing}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleInputChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      inputText: event.target.value
    }))
  }

  handleAdd = (event) => {
    event.preventDefault()

    this.setState((prevState) => ({
      ...prevState,
      inputText: '',
      isEditing: prevState.inputText.trim() === '' ? prevState.isEditing : false,
      todoList:
        prevState.inputText.trim() === ''
          ? prevState.todoList
          : !prevState.isEditing
          ? prevState.todoList.concat([
              {
                title: prevState.inputText.trim(),
                isDone: false
              }
            ])
          : prevState.todoList.map((item) =>
              item.id === prevState.isEditing ? { ...item, title: prevState.inputText } : item
            )
    }))

    this.childRef.current.inputRef.current.focus()
    //TODO: check process percentage
  }

  handleRemove = (id) => () => {
    this.setState((prevState) => ({
      ...prevState,
      todoList: prevState.todoList.filter((item) => item.id !== id)
    }))
  }

  handleEdit = (id) => () => {
    if (!this.state.todoList.find((item) => item.id === id)) {
      console.error('Task not found!')
      return
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        isEditing: id,
        inputText: prevState.todoList.find((item) => item.id === id).title
      }
    })

    this.childRef.current.inputRef.current.focus()
  }

  handleComplete = (id) => () => {
    if (!this.state.todoList.find((item) => item.id === id)) {
      return
    }

    this.setState((prevState) => {
      return {
        ...prevState,
        todoList: prevState.todoList.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item))
      }
    })
  }
}
