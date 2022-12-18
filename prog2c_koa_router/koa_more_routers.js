const Koa = require('koa');

// koa body begin
//const { koaBody } = require('koa-body');
// end

const albumsRouter = require('./router_albums');
const songsRouter = require('./router_songs');

const app = new Koa();

/*
// koa body begin
app.use(koaBody());
app.use((ctx) => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});
// koa end
*/
app.use(albumsRouter.routes(), albumsRouter.allowedMethods());
app.use(songsRouter.routes(), songsRouter.allowedMethods());

app.listen(3000);