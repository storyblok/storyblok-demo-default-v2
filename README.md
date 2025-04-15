# Storyblok Default Demo

This frontend is used when you [create a new demo space in Storyblok](https://app.storyblok.com/#/me/spaces/new?tab=experience-demo). It is built using [Nuxt 3](https://v3.nuxtjs.org/) and [TailwindCSS](https://tailwindcss.com/).

Feel free to explore and reuse the code, but please be aware of the [demo-specific implementation practices](#demo-specific-implementation-notes), which deviate from the most common implementation practices.

## Run locally

First, install all dependencies:
```bash
npm install
```

Create an `.env` file with the following content (find your preview access token under **Settings** > **Access Tokens** in your Storyblok space):
```bash
STORYBLOK_TOKEN=your-preview-access-token
```

Next, run the development server:
```bash
npm run dev
```

In your Storyblok space, go to **Settings** > **Visual Editor** and set `https://localhost:3000/` as the default environment.

Finally, open your **Home** story and see the demo space running locally. Happy building!

## Demo-Specific implementation notes

### Access token and path via URL parameters

We needed one deployed environment that could be used to display a large number of demo spaces that are generated on the fly. Therefore, the access tokens of these spaces are passed via URL parameters. In a more typical scenario, you would probably want to manage the access token as an environment variable. See the note in `nuxt.config.js` and delete `plugins/storyblok.js` to remove the extra functionality for tokens as URL parameters altogether.

### Internationalization and language detection

For the demo, it has to be possible for any language to be added to the internationalization settings in Storyblok and detected automatically on the front end. All currently active language codes are retrieved from the Storyblok space to ensure this. When fetching a particular story based on the current route, it is checked whether any of the currently active language codes matches the first part of the route. For example, if the current route was `https://localhost:3000/de/home` and German had been added as a language, `de` would get added as the language parameter in the API request for the home story. You can look at the [getLanguage composable](composables/getLanguage.js) to see how it works. In a real-world project, you would usually know which languages are used on the website, allowing you to choose a simpler approach.

### Setting a real path for stories

The main drawback of handling internationalization as described above is that field-level translation will not work when setting a real path for certain stories (e.g., `/` instead of `home`). When setting a real path, the language code is no longer part of the route, thus making it impossible to detect.
