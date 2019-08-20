// create a promise
function pms() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('resolve this')
        }, 3000);
    });
}

pms().then(data => {
    console.log(data);
});

// create a async/await
function asy() {
    var pms = new Promise()
}
