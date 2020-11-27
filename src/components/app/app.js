import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component {

    maxId = 10;

    state = {
        todoData: [
            { label: 'Drink Coffe', important: false, id: 1 },
            { label: 'Work', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);

        const newTodo = [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx + 1)
        ];

        return {
            todoData: newTodo
        };
      });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            immmportant: false,
            id: this.maxId++
        };
        
        this.setState(( {todoData} ) => {
           const newArr = [
               ...todoData, 
               newItem
           ];

           return {
               todoData: newArr
           }
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex"> 
                <SearchPanel />
                <ItemStatusFilter />
                </div>
               
                <TodoList todos={this.state.todoData}
                onDeleted={ this.deleteItem }/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
            );
    };
};

