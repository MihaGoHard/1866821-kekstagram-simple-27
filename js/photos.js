const createPhotoElem = (dataPhoto) => {
  const minPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const newPhoto = minPhotoTemplate.cloneNode(true);
  newPhoto.querySelector('.picture__img').src = dataPhoto.url;
  newPhoto.querySelector('.picture__likes').textContent = dataPhoto.likes;
  newPhoto.querySelector('.picture__comments').textContent = dataPhoto.comments;
  return newPhoto;
};

const fillPhotos = (dataPhotos) => {
  const domPhotos = document.querySelector('.pictures');
  domPhotos.append(...dataPhotos.map((dataPhoto) => {
    createPhotoElem(dataPhoto);
  }));
};

export {fillPhotos};
