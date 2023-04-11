const config = {
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
};

module.exports = config;
