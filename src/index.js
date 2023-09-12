import Post from './Post'
import json from './assets/json' //import json file
import './styles/styles.css' //import styles
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String:', post.toString())
console.log('JSON:', json)