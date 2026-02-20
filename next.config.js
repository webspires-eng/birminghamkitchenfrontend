module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shopify.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.shopify.com',
            },
            {
                protocol: 'https',
                hostname: 'sonno.co.uk',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
            },
            {
                protocol: 'https',
                hostname: 'birminghamkitchen.co.uk',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'admin.birminghamkitchen.co.uk',
            },
            // Development only — remove in production
            ...(process.env.NODE_ENV === 'development' ? [{
                protocol: 'http',
                hostname: '127.0.0.1',
            }] : []),
        ]
    },
    compiler: {
        styledComponents: true,
    },
}