export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '623eb9a1512d9d1db4620abc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-brposgre',
                  apiId: '5a3cd540-491e-4b8d-acb5-769879030ef6'
                },
                {
                  buildHookId: '623eb9a290645f281ed6fbe5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qxjepycs',
                  apiId: 'bcb33949-64cb-4c7e-847f-77dad01a8a61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Noido/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qxjepycs.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
