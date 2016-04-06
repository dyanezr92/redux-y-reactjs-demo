function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    setTimeout(() => {
      img.src = src;
      img.onload = () => resolve(img);
    }, 2000);
  });
}

export default {
  loadImage
}
