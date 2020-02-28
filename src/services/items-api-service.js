import TokenService from '../services/token-service'
import config from '../config'

const ItemsApiService = {
  postItem(url) {
    return fetch(`${config.API_ENDPOINT}/items`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        // id: id,
        // user_id: user_id,
        site_Url: url
        // giftlist_user: {
        //   id: id,
        //   username: username,
        //   first_name: first_name
        // },
        // items: {
        //   id: id,
        //   item_name: item_name,
        //   grapic: graphic,
        //   link: link
        // }
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )

  },
}

export default ItemsApiService;