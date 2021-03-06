const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danielwoldegiorgis/Downloads/personal-website/new_website/src/pages/404.js"))),
  "component---src-pages-activities-js": hot(preferDefault(require("/Users/danielwoldegiorgis/Downloads/personal-website/new_website/src/pages/activities.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/danielwoldegiorgis/Downloads/personal-website/new_website/src/pages/contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/danielwoldegiorgis/Downloads/personal-website/new_website/src/pages/experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielwoldegiorgis/Downloads/personal-website/new_website/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/danielwoldegiorgis/Downloads/personal-website/new_website/src/pages/projects.js")))
}

