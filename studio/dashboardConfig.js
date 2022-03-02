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
                  buildHookId: '621ee16b69630b2af2083344',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-irkz6m99',
                  apiId: '72d22eba-ae4e-4ac6-bac6-46b2d669732e'
                },
                {
                  buildHookId: '621ee16be5aa043179cc0543',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8s363333',
                  apiId: '23dd5cf9-37e3-40f8-9fb3-0909e923ecab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/placeholder68/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8s363333.netlify.app',
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
