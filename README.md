# Boilerplate code for React and Tailwind

---

Project structure:

- follows atomic UI structure:

  - atoms: barebone HTML elements and utilities. e.g. buttons, accordions, dropdowns
  - molecules: composed of atoms. e..g cards
  - organisms: combination of molecules e.g. contact form, testimonials section

- ### Flow

- protected routes are enclosed in the wrapper (here, auth protector).
- routes tree can be composed in the routes folder which is then rendered as routes.
- this make the API call and caches the result in context.
  - <em>For simpler state, auth works fine. otherwise, would have used state manegers, most probably recoil. It works well with NextJS applications too.
- we can extend the feature of route protection by making the API call once the app loads.
- this model is highly extensible with flexibility of making calls for each render or periodical calls or event based calls like tab focus.
- Employed proper error handling and reflecting the same in user interface.
  App loads => auth context is setup after an API call to verify the uesr (maybe through auth tokens) => result is stored in the context => accessible to all route wrappers

---

---

## [](https://github.com/rakesh-gupta29/mercor/tree/main#setup)Setup

Get the code by either cloning this repository using git
`git clone https://github.com/rakesh-gupta29/mercor/tree/main/react-ts.git`

## [](https://github.com/rakesh-gupta29/mercor/tree/main/#installation)Installation

`npm i`

## [](https://github.com/rakesh-gupta29/mercor/tree/main/react-ts#usage)Usage

### [](https://github.com/rakesh-gupta29/mercor/tree/main/react-ts#development-server)Development server

`npm start`

You can view the development server at `localhost:3000`.

### [](https://github.com/rakesh-gupta29/mercor/tree/main/react-ts#production-build)Production build

`npm run build`

## [](https://github.com/rakesh-gupta29/mercor/tree/main/react-ts#metadata)Define Package Metadata

- Amend `package.json` file and optionally specify:
  - `name` - Name of your project. A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`.
  - `version` - Specify and maintain a version number indicator for your project code.
  - `author` - Your organization or just yourself. You can also specify [`contributors`](https://docs.npmjs.com/files/package.json#people-fields-author-contributors).
  - `description` - Short description of your project.
  - `keywords` - Put keywords in it. It’s an array of strings.
  - `repository` - Specify the place where your code lives.
  - `license` - Announce your code license, figure out the license from [Choose an Open Source License](https://choosealicense.com/) .
  - `browserslist` - Specify the supported browsers versions - you can refer to [full list](https://github.com/browserslist/browserslist#full-list) of available options.

## [](https://github.com/rakesh-gupta29/mercor/tree/main/react-ts#author)Author

- [Rakesh Gupta](https://github.com/rakesh-gupta29)

## [](https://github.com/rakesh-gupta29/mercor/tree/main/react-ts#license)License

MIT
