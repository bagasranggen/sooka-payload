const DISABLE_BUILD_MINIMIZATION = process.env.NEXT_PUBLIC_DISABLE_BUILD_MINIMIZATION;

import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    async redirects() {
        return [
            {
                source: '/',
                destination: '/admin',
                permanent: true,
            },
        ];
    },
    webpack: (webpackConfig) => {
        webpackConfig.resolve.extensionAlias = {
            '.cjs': ['.cts', '.cjs'],
            '.js': ['.ts', '.tsx', '.js', '.jsx'],
            '.mjs': ['.mts', '.mjs'],
        };

        if (DISABLE_BUILD_MINIMIZATION) webpackConfig.optimization.minimize = false;

        return webpackConfig;
    },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
