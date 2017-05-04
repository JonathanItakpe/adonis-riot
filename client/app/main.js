const riot = require('riot')
require('riot-hot-reload')
require('./random.tag')

riot.mount('random', {
  title: 'Hi there!'
})

