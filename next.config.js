/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cdnx.jumpseller.com",
                pathname:"/tienda-gamer-medellin/**",
                port:""
                
            }
        ]
    }
}

module.exports = nextConfig
