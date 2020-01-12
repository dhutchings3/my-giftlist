import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListContext, { nullList } from '../../contexts/ListContext'
import ListApiService from '../../services/List-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import StyleIcon from '../../components/StyleIcon/StyleIcon'
import ItemForm from '../../components/ItemForm/ItemForm'
import './ListPage.css'

export default class ListPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ListContext

  componentDidMount() {
    const { listId } = this.props.match.params
    this.context.clearError()
    ListApiService.getList(listId)
      .then(this.context.setList)
      .catch(this.context.setError)
    ListApiService.getListItems(listId)
      .then(this.context.setItems)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearList()
  }

  renderList() {
    const { list, items } = this.context
    return <>
      <h2>{list.title}</h2>
      <p>
        <ListStyle list={list} />
        {list.author.id && <>
          <Hyph />
          <ListAuthor list={list} />
        </>}
        <Hyph />
        <NiceDate date={list.date_created} />
      </p>
      <ListContent list={list} />
      <ListItems items={items} />
      <ItemForm />
    </>
  }

  render() {
    const { error, list } = this.context
    let content
    if (error) {
      content = (error.error === `List doesn't exist`)
        ? <p className='red'>List not found</p>
        : <p className='red'>There was an error</p>
    } else if (!list.id) {
      content = <div className='loading' />
    } else {
      content = this.renderList()
    }
    return (
      <Section className='ListPage'>
        {content}
      </Section>
    )
  }
}

function ListStyle({ list }) {
  return (
    <span className='ListPage__style'>
      <StyleIcon style={list.style} />
      {' '}
      {list.style}
    </span>
  )
}

function ListAuthor({ list = nullList }) {
  return (
    <span className='ListPage__author'>
      {list.author.full_name}
    </span>
  )
}

function ListContent({ list }) {
  return (
    <p className='ListPage__content'>
      {list.content}
    </p>
  )
}

function ListItems({ items = [] }) {
  return (
    <ul className='ListPage__item-list'>
      {items.map(items =>
        <li key={item.id} className='ListPage__item'>
          <p className='ListPage__item-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ListPage__item-icon blue'
            />
            {item.text}
          </p>
          <p className='ListPage__item-user'>
            {item.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
