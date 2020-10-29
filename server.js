const next = require('next')
const qs = require('qs');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const port = process.env.PORT || 3000;
const router = express.Router();
router.get('*', (req, res) => {
    const { pathname } = req._parsedUrl;
    const isPc =
        !/mobile/gi.test(req.headers['user-agent']) && req.query.mode !== 'mobile';
    const isNext = !/\/_next\/webpack-hmr/gi.test(pathname);
    const url = isPc && isNext ? '/pc' : pathname === '/pc' ? '/' : pathname;
    if (isPc && isNext) {
        req.query.mode = 'mobile';
        req.query.pathname = `${
            req.headers.host
                ? `${req.headers['x-forwarded-proto'] || 'http'}://${req.headers.host}`
                : '.'
        }${pathname}?${qs.stringify(req.query)}`;
    }
    app.render(req, res, url, req.query);
});

app.prepare().then(() => {
    const appEx = express();
    appEx.use(express.static(path.join(__dirname, '.next/static')));
    appEx.use(bodyParser.json());
    appEx.use(bodyParser.urlencoded({ extended: false }));
    appEx.use('/', router);
    appEx.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
