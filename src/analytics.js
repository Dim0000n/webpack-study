function createAnalytics() {
    let counter = 0 //variable to store click count
    let isDestroyed = false //state flag of Analytics 

    const listener = () => counter++ //incrementor of counter

    document.addEventListener('click', listener) //count number of click on document

    return {
        //method to destroy Analytcis
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },
        
        //method to get number of clicks
        getClicks() {
            //if destroyed
            if (isDestroyed) return 'Analytics was destroyed'

            return counter
        }

    }
}

window.analytics = createAnalytics() //create analytics