export default async function (slugArray: string[]): Promise<string> {
  let slug: string

  if (slugArray.length) {
    const language = await getLanguage(slugArray)
    const hasLanguagePrefix = language !== 'default'
    const trimmed = hasLanguagePrefix ? slugArray.slice(1) : slugArray
    slug = trimmed.join('/')
  } else {
    slug = 'home'
  }

  if (slug === '') {
    slug = 'home'
  }

  return slug
}
