const routes = [
    {
        path: '/',
    },
    {
        path: '/pc',
    },
    {
        path: '/child',
        children: [
            {
                path: '/child2',
                children: [],
            },
        ],
    },
    {
        path: '/test',
    }
];
function recursionLoadRotes(routes, withPath = '') {
    return routes.reduce((pre, cur) => {
        if (cur.children && cur.children.length){
            const routeList = recursionLoadRotes(cur.children, withPath + cur.path);
            pre = [...pre, ...routeList];
        }
        pre.push(withPath + cur.path);
        return pre;
    }, [])
}
const routeList = recursionLoadRotes(routes);
module.exports = routeList;
