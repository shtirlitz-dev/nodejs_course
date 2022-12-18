const Router = require('@koa/router');

// all for /albums
const router = new Router({prefix: '/albums'});

// '/albums'
router.get('/', (ctx, next) => {
    ctx.body = 'Albums:....';
});

// '/albums/4?foo=bar' => id = 4
router.get('/q:id', (ctx, next) => {
    ctx.body = `Albums ${ctx.params.id}, ${ctx.query.foo}`;
});

// '/albums/4' => id = 4
router.get('/:id', (ctx, next) => {
    ctx.body = `Albums ${ctx.params.id}`;
});

router.post('/', (ctx, next) => {
    const resourceID = Math.random();
    console.log(JSON.stringify(ctx.request.body));
    ctx.set('Location', `/albums/${resourceID}`);
    ctx.status = 201; // created
})

module.exports = router