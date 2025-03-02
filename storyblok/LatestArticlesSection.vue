<script setup>
defineProps({ blok: Object });

const { slug } = useRoute().params;
let language = 'default';

if (slug) {
  language = await getLanguage(slug);
}

const articles = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories/`, {
  version: getVersion(),
  starts_with: 'articles',
  language,
  fallback_lang: 'default',
  resolve_relations: 'article-page.categories',
  is_startpage: false,
  per_page: 6,
});

articles.value = data.stories;
</script>

<template>
  <section
    v-editable="blok"
    class="page-section latest-articles-section bg-white"
  >
    <div class="container">
      <Headline v-if="blok.headline" :headline="blok.headline" class="text-center" />
      <Lead v-if="blok.lead" class="text-center">
        {{ blok.lead }}
      </Lead>
      <div v-if="articles" class="mt-24 grid gap-x-24 gap-y-12 lg:grid-cols-2">
        <ArticleCardHorizontal
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </section>
</template>
