export default async function (slug: string | string[]): Promise<string> {
  const storyblokApi = useStoryblokApi()

  /**
   * Request all languages set up in the space.
   */
  const { data } = await storyblokApi.get('cdn/spaces/me')
  const languageCodes: string[] = data.space.language_codes

  /**
   * If the the first part of the slug array matches one of the language codes defined in the space,
   * it matches the language code that has to be specified in the API request for the story/stories.
   */
  const firstSlug = Array.isArray(slug) ? slug[0] : slug
  if (firstSlug && languageCodes.includes(firstSlug)) {
    return firstSlug
  }
  return 'default'
}
