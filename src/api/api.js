import axios from 'axios';

const api = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

const storyTypes = ["top","show","ask","job"]

function getStories(type = storyTypes[0]) {
    return new Promise((resolve,reject)=>{
        
        if(!storyTypes.includes(type)) reject("Not relevent")

        let thisStory = "/"+type+"stories.json";

        api.get(thisStory)
        .then(res => {
            const stories = res.data
            resolve(stories)
        }).catch((e)=>{
            console.log(e)
            reject(e)
        })
    })
}

function getPost(postid) {
    return new Promise((resolve,reject)=>{
        api.get(`/${postid}.json`)
      .then(res => {
        const stories = res.data
        resolve(stories)
      }).catch((e)=>{
          console.log(e)
          reject(e)
      })
    })
}

export {getStories,getPost}


// get a post 
// https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

// get top stories 
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

// get show hm stories 
// https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty