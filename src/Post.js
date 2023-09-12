class Post {
  
    constructor(title, img) {
        this.title = title  //set title of post
        this.date = new Date() // set date of creation
        this.img = img //set image
    }

    toString() {    //return string from instance
       return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            img: this.img
        })
    }

    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}

export default Post