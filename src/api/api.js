import axios from 'axios'
axios.defaults.baseURL='../../static/';
export const getNewsList=()=>{
  return axios.get('newslist.json')
    .then(res=>
      res.data
    )
}
export const getContacts=()=>{return axios.get('contacts.json').then(res=>res.data)}
