import TokenService from '../services/token-service'
import config from '../config'

const ListApiService = {
  getListItems() {
    return fetch(`${config.API_ENDPOINT}/items`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getList() {
    return fetch(`${config.API_ENDPOINT}/list`)
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postListItem(item_id) {
    return fetch(`${config.API_ENDPOINT}/list`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        item_id: item_id,
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

  },
  deleteListItem(listItemId) {
    return fetch(`${config.API_ENDPOINT}/list/${listItemId}`, {
      method: 'DELETE',
      headers: {
        // 'content-type': 'application/json',
        // 'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res
      )
  },
}

export default ListApiService