export default async function () {
  const folderPathTest = await getFolderPath();
  const releaseId = await getReleaseId();
  const siteConfig = ref();
  const storyblokApi = useStoryblokApi();
  const nestedSiteConfig = ref(false);
  const apiParams = {
    version: getVersion(),
    resolve_links: 'url',
    from_release: releaseId,
  };

  if (folderPathTest) {
    try {
      // Check whether there is a site-config in the current folder
      const { data } = await storyblokApi.get(
        `cdn/stories/${folderPathTest}/site-config`,
        apiParams,
      );
      siteConfig.value = data.story;
      nestedSiteConfig.value = true;
    }
    catch {
      nestedSiteConfig.value = false;
    }
  }

  if (!nestedSiteConfig.value) {
    // Otherwise load the default site-config
    const { data } = await storyblokApi.get(
      'cdn/stories/site-config',
      apiParams,
    );
    siteConfig.value = data.story;
  }

  return siteConfig;
}
