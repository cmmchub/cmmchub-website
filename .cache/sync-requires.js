const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/cds/Dropbox/dev_projects/cmmchub-website/src/templates/blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cds/Dropbox/dev_projects/cmmchub-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/cds/Dropbox/dev_projects/cmmchub-website/src/pages/404.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/cds/Dropbox/dev_projects/cmmchub-website/src/pages/contact.js"))),
  "component---src-pages-events-js": hot(preferDefault(require("/Users/cds/Dropbox/dev_projects/cmmchub-website/src/pages/events.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cds/Dropbox/dev_projects/cmmchub-website/src/pages/index.js")))
}

