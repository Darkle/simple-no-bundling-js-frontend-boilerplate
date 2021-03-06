import Navigo from './web_modules/navigo.js'

import { appState } from './appState.js'
import {init as initDb} from './db.js'
import {log} from './logger.js'
import {loadHomePage} from './views/homePage.js'
import {loadSubredditPage} from './views/subredditPage.js'
import {loadImageViewer} from './imageViewer.js'

if(!window.location.hash.includes('#')){
  window.location.hash = '!/home'
}    

initDb().then(initRouter).catch(log)

function initRouter(){ // eslint-disable-line max-lines-per-function
  // page('/home', () => {
  //   console.log('home page route run /')
  //   loadHomePage()
  // })
  // page('/sub/:subreddit', loadSubredditPage)

  // page('/sub/imageviewer/:subreddit', loadImageViewer)
  // page('/folders', () => {
  //   document.title = `RPO - Folders`
  // })
  // page('/manage', () => {
  //   document.title = `RPO - Manage Subs`
  // })
  // // page('*', () => {
  // //   log('log error here for 404')
  // //   // redirect back to home page
  // //   page('/')
  // // })
  // page({
  //   hashbang: true
  // })

  const root = null
  const useHash = true // Defaults to: false
  const hash = '#!' // Defaults to: '#'
  const router = new Navigo(root, useHash, hash)
  router
  .on('/home', function () {
    console.log('home')
  })
  .on('/sub/:subreddit', function () {
    console.log('/sub/:subreddit')
  })
  .on('*', function () {
    console.log('*')
    router.navigate('/home')
  })

  .resolve()  
}

// import {emitter} from './actions.js'
// emitter.emit('add-folder', 'folder 1')
// emitter.emit('add-folder', 'folder 2')
// emitter.emit('add-folder', 'folder 3')
// emitter.emit('add-subreddit', 'Aww')
// emitter.emit('add-subreddit', 'Cute')
// emitter.emit('add-subreddit', 'Foxes')
// emitter.emit('add-subreddit', 'CatGifs')
// emitter.emit('add-subreddit', 'Pics')
// emitter.emit('add-subreddit', 'Space')
// emitter.emit('add-subreddit', 'Abandoned')
// emitter.emit('add-subreddit', 'Animals')
// emitter.emit('add-subreddit', 'Cats')
// emitter.emit('add-subreddit', 'RedPandas')
// emitter.emit('add-subreddit', 'HardcoreAww')
// emitter.emit('add-subreddit', 'CatsStandingUp')
// emitter.emit('add-subreddit', 'Photography')
// emitter.emit('add-subreddit', 'Gifs')
// emitter.emit('add-subreddit', 'Future')
// emitter.emit('add-subreddit', 'Maps')
// emitter.emit('add-subreddit', 'Puppies')
// emitter.emit('add-subreddit', 'Rabbits')
// emitter.emit('add-subreddit', 'DogPictures')
// emitter.emit('add-subreddit', 'Earth')
// emitter.emit('add-subreddit', 'HDR')
// emitter.emit('add-subreddit', 'Food')
// emitter.emit('add-subreddit', 'Art')
// emitter.emit('add-favourite-subreddit', 'Pics')
// emitter.emit('add-favourite-subreddit', 'Space')
// emitter.emit('add-favourite-subreddit', 'Abandoned')
// emitter.emit('add-favourite-subreddit', 'Animals')
// emitter.emit('add-favourite-subreddit', 'Cats')