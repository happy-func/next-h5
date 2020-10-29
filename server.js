const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const qs = require('qs');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query, } = parsedUrl
        const isPc = !/mobile/gi.test(req.headers['user-agent']) && query.mode !== 'mobile';
        const isNext = /^\/_next/.test(pathname);
        const url = isPc && !isNext ? `/pc` : pathname;
        if (isPc && !isNext) {
            const temp = `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}${pathname}?mode=mobile&${qs.stringify(query)}`;
            for (const key in query){
                delete query[key];
            }
            query.mode = 'mobile';
            query.pathname = temp;
        }
        app.render(req, res, url, query)
    }).listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
