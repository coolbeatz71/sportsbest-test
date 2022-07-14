const withTM = require('next-transpile-modules')([
    '@heathmont/moon-themes',
    '@heathmont/moon-utils',
    '@heathmont/moon-core',
    '@heathmont/moon-core-tw',
    '@heathmont/moon-icons',
    '@heathmont/moon-components',
]);

module.exports = withTM();

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                source: '/:path*',
            },
        ];
    },
    poweredByHeader: false,
};
