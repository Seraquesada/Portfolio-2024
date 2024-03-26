/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add a rule to handle PDF files
        config.module.rules.push({
            test: /\.(pdf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/_next/static/files',
                        outputPath: `${isServer ? '../' : ''}static/files`,
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },
};

export default nextConfig;
