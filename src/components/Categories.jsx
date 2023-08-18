import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'Phones',
                    name: 'Phones'
                },
                {
                    key: 'Notebooks',
                    name: 'Notebooks'
                },
                {
                    key: 'TV-s',
                    name: 'TV-s'
                },
                {
                    key: 'Tabs',
                    name: 'Tabs'
                },
                {
                    key: 'Consoles',
                    name: 'Consoles'
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories