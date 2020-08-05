const os = require('os')

module.exports = function getSocketPath (name) {
  return os.platform() !== 'win32' ? `${os.tmpdir()}/${name}.sock` : `\\\\.\\pipe\\${name}`
}
