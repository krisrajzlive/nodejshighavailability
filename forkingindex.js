const { fork } = require('child_process')

const processes = [
    fork('./forking', [3000]),
    fork('./forking', [3001]),
    fork('./forking', [3002]),
]

console.log(`forked ${processes.length} processes`)