import { getCollection } from "astro:content";

export async function blogStaticPaths(lang?: string) {
  const pages = await getCollection('blog');

  const paths = pages.map(page => {
    const [lang, ...slug] = page.slug.split('/');
    return { params: { lang, slug: slug.join('/') || undefined }, props: page }
  });

  return paths.filter(x => {
    if (lang) {
      return x.params.lang.toLocaleLowerCase() === lang.toLocaleLowerCase()
    }

    return x;
  });
}

export async function getBlogPostsListByLanguage(lang: string) {
  const posts = await blogStaticPaths();
  return posts.filter(x => x.params.lang.toLocaleLowerCase() === lang.toLocaleLowerCase()).map(x => {
    return {
      slug: x.params.slug || "",
      title: x.props.data.title,
      cover: x.props.data.cover
    }
  });
}