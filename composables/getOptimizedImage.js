export default function (image, width = 1200, height = 0) {
  if (!image?.filename) {
    return;
  }

  let imageSource = `${image.filename}/m/${width}x${height}`;

  if (image.focus) {
    imageSource += `/filters:focal(${image.focus}):no_upscale()`;
  }
  else {
    imageSource += `/filters:no_upscale()`;
  }

  return imageSource;
}
