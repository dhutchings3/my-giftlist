import React from 'react';
import ListApiService from '../services/list-api-service';
// import './Lists.css';

class ListView extends React.Component {
  constructor(props) {
    super(props)

    this.listItem = this.props.location.state.listItem
    this.list = this.props.location.state.list
    this.list = this.list.filter(item => {
      return item.item_id === this.listItem.item_id
    })

    this.state = {
      textValue: '',
      item: this.item,
      placeholder: 'Apple TV'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({textValue: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const text = this.state.textValue
    ListApiService.updateList(this.list.id, text)
      .then(() => {
        const updatedlist = this.state.list.map(item => {
          if (item.id === this.listItem.id) {
            item.name = text
          }
          return item
        })
        this.setState({ list: updatedlist })
      })
      .then(() => {
        this.setState({
          placeholder: 'Item Added!' ,
          textValue: ''
        })
      })
      .catch(this.context.setError)
    event.target.name.value = ''

  }

  render() {
    const reviews = this.list.map((listItem, i) => {
      return (
        <div key={i} className={'displayed-item ' + (listItem.name === 'dummy text' ? 'hidden' : 'show')} >
          <div>{listItem.name}</div>
        </div>
      )
    })
    return (
      <div className='add-item-form-div'>
        <form className='add-item' onSubmit={this.handleSubmit}>
          <h2>Add Item</h2>
          <div>
          <h3>{this.listItem.item.name}</h3>
            <h3>Name: {this.listItem.item.name}</h3>
            {items}
          </div>
          <label htmlFor='review' className='review-label'>
            What did you think?
            <textarea
              required
              aria-label='Add Item'
              id='item'
              name='item'
              rows='1'
              value={this.state.textValue} onChange={this.handleChange}
              placeholder={this.state.placeholder}
            />
          </label>
          <div>
            <input type="submit" value="Submit" className='submit-review-button' />
            <input type='hidden' name='review' id='review' value='dummy' />
            <input type='hidden' name='rating' id='rating' value='1' />
          </div>
        </form>
      </div>
    )
  }
}

export default ListView;