/**
 * createCarouselArray - takes in an item object, containing an Images array, and puts out an array of images, with the PrimaryImage first.
 */
export const createCarouselArray = item => {
  const images = item.Images[0];
  let returnArray = [];

  if (images.PrimaryImage.length > 0) {
    returnArray.push(images.PrimaryImage[0].image);
  }
  for (let i = 0; i < images.AlternateImages.length; i++) {
    returnArray.push(images.AlternateImages[0].image);
  }
  return returnArray;
};

// export const createRatingsArray = () => {};
