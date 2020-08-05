# unix-socket-path

Get a cross platform unix socket path

```
npm install unix-socket-path
```

## Usage

``` js
const getSocketPath = require('unix-socket-path')

// returns /tmp/my-app.sock on linux
// returns /var/..../my-app.sock on mac
// returns \\.\pipe\my-app on windows
console.log(getSocketPath('my-app'))
```

## License

MIT
