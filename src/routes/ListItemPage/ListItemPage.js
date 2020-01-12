import React, { Component } from 'react'
import ListItemContext from '../../contexts/ListItemContext'
import ListApiService from '../../services/list-api-service'
import { Section } from '../../components/Utils/Utils'
import ListItemItem from '../../components/ArticleListItem/ArticleListItem'

export default class ListItemPage extends Component {
  static contextType = ListItemContext

  componentDidMount() {
    this.context.clearError()
    ListApiService.getlists()
      .then(this.context.setListItem)
      .catch(this.context.setError)
  }

  renderLists() {
    const { listItem = [] } = this.context
    return listItem.map(list =>
      <ListItemItem
        key={list.id}
        list={list}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='ListItemPage'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderLists()}
      </Section>
    )
  }
}
