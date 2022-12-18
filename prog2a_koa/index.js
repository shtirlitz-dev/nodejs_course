const Koa = require('koa');
const app = new Koa()

var u = 1;
app.use(async (ctx, next) =>{
    const start = Date.now();
    ctx.state.u = u;
    u++;
    await next();
    const end = Date.now();
    console.log(ctx.path, end-start);
});


app.use(async (ctx, next) => {
    // ctx context
    // ctx.request
    // ctx.response
    // ctx.method == ctx.request.method
    // ctx.state - pass data from one middleware to another one (e.g. ctx.state.user = await User.find(id))
    console.log(`u = ${ctx.state.u}`)
    //next();
    ctx.body = 'Hello worldchen!'; // == ctx.response.body
});

app.listen(3000, () => {
    console.log('listening')
});