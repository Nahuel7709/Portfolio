/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        // This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
