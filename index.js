export default {
    name: 'renderer-asciidoc',
    client: './client.js',
    server: './server.js',
    viteConfig() {
        return {
            optimizeDeps: {
                include: ['renderer-asciidoc/client.js'],
				exclude: ['renderer-asciidoc/server.js'],
            },
            ssr: {
                renderer: 'renderer-asciidoc/server.js',
            }
        };
    }

}