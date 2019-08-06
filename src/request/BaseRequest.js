import axios from 'axios'

const HTTP = axios.create({})

const baseRequest = (method, url, data) => {
    console.log(method,url,data)
    return new Promise((resolve, reject) => {
        HTTP.request({
            method,
            url,
            data,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            }
        }).then(response => {
            resolve(response.data)
        }).catch(error => {            
            console.log('REDIRECT ERROR', error)
            reject(error)
        })
    })
}

export const post = (url, data) => {
    // console.log(url,data)
    return baseRequest('post', url, data);
}

export default { post }