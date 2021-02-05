export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '601db6c1095b326fe89e357b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-2-studio-mnxjsx7z',
                  apiId: 'ae6c6ced-c065-485d-8ea6-0affdfeb600f'
                },
                {
                  buildHookId: '601db6c20aa75d8c7094c9c7',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-2-web-vzm3h2cm',
                  apiId: '9d6e9eb5-457f-486c-b080-095d99d4f5e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathanpuls/sanity-sapper-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-2-web-vzm3h2cm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
