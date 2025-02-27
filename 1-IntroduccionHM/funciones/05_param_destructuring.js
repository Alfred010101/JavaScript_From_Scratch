function webServer({url}){
    return url;
}

console.log(webServer({url: 'http:alfred.io'}))

let config = {
    url: 'domi.io',
    port: 80,
    ad: {

    }
}

console.log(webServer(config))
