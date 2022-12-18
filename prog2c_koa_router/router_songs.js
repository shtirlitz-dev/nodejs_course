const Router = require('@koa/router');

// all for /albums
const router = new Router({prefix: '/songs'});

// '/albums'
router.get('/', (ctx, next) => {
    ctx.body = 'Songs:....';
});

// '/albums/4?foo=bar' => id = 4
router.get('/q:id', (ctx, next) => {
    ctx.body = `Song ${ctx.params.id}, ${ctx.query.foo}`;
});

// '/albums/4' => id = 4
router.get('/:id', (ctx, next) => {
    ctx.body = `Song ${ctx.params.id}`;
});

module.exports = router