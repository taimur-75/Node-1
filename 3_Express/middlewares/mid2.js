function mid2(req,res,next){
    console.log('I am second middleware')
    next()
}

module.exports = mid2