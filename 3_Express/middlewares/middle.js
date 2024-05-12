function middle1(req,res,next){
    console.log('I am a custom middleware')
    next()
}

module.exports = middle1

