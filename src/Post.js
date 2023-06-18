class Post {
  
    constructor(title) {
        this.title = title  //set title of post
        this.date = new Date() // set date of creation
    }

    toString() {    //return string from instance
       return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
}

export default Post