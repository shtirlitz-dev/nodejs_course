const Koa = require('koa');

const albumsRouter = require('./router_albums');
const songsRouter = require('./router_songs');

const app = new Koa();

app.use(albumsRouter.routes(), albumsRouter.allowedMethods());
app.use(songsRouter.routes(), songsRouter.allowedMethods());

app.listen(3000);