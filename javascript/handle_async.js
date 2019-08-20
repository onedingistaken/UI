// callback
function AsyncFunc(cb) {
    for (let i = 0; i < 5; i++) {
        cb(i);
    }
}
AsyncFunc(v => {
    setTimeout(() => {
        console.log(v);
    }, v * 1000);
});

// promise
function AsyncFunc() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('hello promise');
        }, 3000);
    });
}
AsyncFunc().then(result => {
    console.log(result);
});

// async/await
function AsyncTask(i) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(i + 1)
        }, i * 1000);
    });
}
async function AsyncFunc() {
    // return AsyncTask(0)
    //     .then(res1 => AsyncTask(res1))
    //     .then(res2 => AsyncTask(res2))
    //     .then(res3 => res3)
    const res1 = await AsyncTask(0);
    const res2 = await AsyncTask(res1);
    const res3 = await AsyncTask(res2);
    return res3;
}
AsyncFunc().then(result => {
    console.log(result);
});

// error first callback
function ErrFunc(username, cb) {
    if (!username) {
        cb('username error');
    } else {
        cb('', username);
    }
}
ErrFunc('Arun', function (err, data) {
    if (!err) {
        console.log(data);
    }
});