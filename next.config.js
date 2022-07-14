const withTM = require('next-transpile-modules')([
    '@heathmont/moon-themes',
    '@heathmont/moon-utils',
    '@heathmont/moon-core',
    '@heathmont/moon-core-tw',
    '@heathmont/moon-icons',
    '@heathmont/moon-components',
]);

module.exports = withTM();

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
];

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
    poweredByHeader: false,
};
