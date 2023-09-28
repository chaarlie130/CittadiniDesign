function buy(template) {
    localStorage.setItem('product', template)
    location.href = 'purchase.html'
}
function recall() {
    console.log(localStorage.getItem('product'))
}