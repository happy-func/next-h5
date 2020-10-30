// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const qs = require('qs');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const RouteList = require('./route');

const port = process.env.PORT || 3000;

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        if (RouteList.includes(pathname)) {
            const isPc =
                !/mobile/gi.test(req.headers['user-agent']) && query.mode !== 'mobile';
            const isNext = !/\/_next\/webpack-hmr/gi.test(pathname);
            const url = isPc && isNext ? '/pc' : pathname === '/pc' ? '/' : pathname;
            if (isPc && isNext) {
                query.mode = 'mobile';
                query.pathname = `${
                    req.headers.host
                        ? `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}`
                        : '.'
                }${pathname}?${qs.stringify(query)}`;
            }
            app.render(req, res, url, query);
        } else {
            handle(req, res, parsedUrl)
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`);
    })
})

