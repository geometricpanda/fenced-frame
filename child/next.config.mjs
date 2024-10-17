/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Supports-Loading-Mode',
                        value: 'fenced-frame',
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
