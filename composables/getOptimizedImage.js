export default function (image, width = 1200, height = 0, filters = '') {
  if (!image?.filename) {
    return;
  }

  const imageSource = `${image.filename}/m/${width}x${height}`;

  let appliedFilters = image.focus ? `/filters:focal(${image.focus}):no_upscale()` : `/filters:no_upscale()`;

  if (filters) {
    appliedFilters += filters;
  }

  return imageSource + appliedFilters;
}
