export default async function () {
  let slug = await getSlug()
  let folderPath = ''

  if (slug) {
    const language = await getLanguage(slug)
    /**
     * If a specific language is requested, the first part of the slug (the language code) needs to be removed
     */
    if (language) slug = slug.slice(1)
    /**
     * Additionally, the story slug has to be removed to return only the folder path
     */
    slug.pop()
    folderPath = slug.join('/')
  }

  return folderPath
}
