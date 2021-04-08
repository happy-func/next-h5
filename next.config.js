module.exports = {
    useFileSystemPublicRoutes: false,
    webpack(config, { isServer }) {
        console.log(isServer)
        if (!isServer) {
            // config.externals = {
            //     '@material-ui/core': 'material-ui'
            // }
        }
        return config;
    },

}
