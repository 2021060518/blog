export default defineAppConfig({
  alpine: {
    title: 'Alpine',
    description: 'The minimalist blog theme',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: '雀雀博客' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://beian.miit.gov.cn/' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '浙ICP备18035094号-1' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    // socials: {
    //   twitter: 'nuxtlabs',
    //   instagram: 'atinuxt',
    //   linkedin: {
    //     icon: 'uil:linkedin',
    //     label: 'LinkedIn',
    //     href: 'https://www.linkedin.com/company/nuxtlabs'
    //   }
    // },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
