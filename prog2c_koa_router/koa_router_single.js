const Koa = require('koa');
const Route = require('@koa/router');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'hello wrld';
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);