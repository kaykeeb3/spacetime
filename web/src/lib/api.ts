import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})


/*  
   TROCAR O ENDEREÇO DA URL, DA WEB E MOBILE  
   192.168.100.1:
*/