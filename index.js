'use strict'

const path = require('path')
const childProcess = require('child_process')
const phantomjs = require('phantomjs-prebuilt')
const binPath = phantomjs.path

const options = {
  "data": {
    "columns": [
      ["data1", 30, 150, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25]
    ],
    "type": "spline"
  },
  "padding": {
    "top": 10,
    "bottom": 10,
    "right": 15,
    "left": 15
  },
  "size": {
    "width": 320,
    "height": 320
  }
}
const output = 'test.png'
const size = '320x320'

const childArgs = [
  path.join(__dirname, 'phantom-exporter.js'),
  output,
  JSON.stringify(options),
  size
]

childProcess.execFile(binPath, childArgs, (err, stdout, stderr) => {
  if (err) return console.error(err)
  console.log(`stdout: `, stdout)
  console.log(`stderr: `, stderr)
})
