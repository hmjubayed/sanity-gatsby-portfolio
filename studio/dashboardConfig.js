export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62c8b3b74b6a3c146b526c96',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-q8hadbvd',
                  apiId: '104e4196-7bf9-4e8f-ab16-34128789f5d4'
                },
                {
                  buildHookId: '62c8b3b71547471632cb9829',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xqds833t',
                  apiId: '3b8bd608-8931-4bd0-836b-07eeab571107'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hmjubayed/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xqds833t.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
