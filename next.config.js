/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdnx.jumpseller.com",
                
            }
        ]
    }
}

module.exports = nextConfig
