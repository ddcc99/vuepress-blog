const nav = require('./config/nav')

module.exports = {
    title: '博客小站',
    description: 'Just write about feelings',
    // base: '/blog/',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/icon/favicon.ico',
            },
        ],
    ],
    themeConfig: {
        logo: '/assets/icon/favicon.ico',
        nav,
        background: '/assets/img/bg.webp',
        sidebar: 'auto',
        sidebarDepth: 2,
        externalLinks: [
            {
                text: 'CodePen',
                link: 'https://codepen.io/eddievandeer',
                target: '_blank'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/eddievandeer/eddievandeer.github.io',
                target: '_blank'
            }
        ],
    },
    markdown: {
        lineNumbers: true
    },
    indentedSyntax: true
}