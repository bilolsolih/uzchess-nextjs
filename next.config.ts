import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8888',
                pathname: '/uploads/**',
            }
        ],
        dangerouslyAllowLocalIP: true
    }
};

export default nextConfig;
