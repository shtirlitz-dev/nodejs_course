
var u = new URL('https://me:1234@stepik.org:80/lesson/562729/step/1?message=556817');

/*
console.log(u.href);
console.log(u.origin);
console.log(u.protocol);
console.log(u.username);
console.log(u.password);
console.log(u.host);
console.log(u.hostname);
console.log(u.port);
console.log(u.pathname);
*/
console.log(u.searchParams.get('message'));

 for(const k in u)
     console.log(`${k}: ${u[k]}`);



