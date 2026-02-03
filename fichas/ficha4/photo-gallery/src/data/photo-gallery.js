// src/data/photos.js
export const photos = [
  {
    id: 1,
    title: 'Mountain Sunset',
    url: 'https://picsum.photos/id/1018/800/600'
  },
  {
    id: 2,
    title: 'Ocean Waves',
    url: 'https://picsum.photos/id/1015/800/600'
  },
  {
    id: 3,
    title: 'Forest Path',
    url: 'https://picsum.photos/id/1019/800/600'
  },
  {
    id: 4,
    title: 'City Lights',
    url: 'https://picsum.photos/id/1022/800/600'
  },
  {
    id: 5,
    title: 'Desert Landscape',
    url: 'https://picsum.photos/id/1024/800/600'
  },
  {
    id: 6,
    title: 'Snowy Mountains',
    url: 'https://picsum.photos/id/1036/800/600'
  }
]

// Helper para encontrar foto por ID
export function findPhotoByID(id) {
  return photos.find(p => p.id === Number(id));
}

// Helper para encontrar o index da foto
export function findPhotoIndex(id) {
  return photos.findIndex(p => p.id === Number(id));
}

// Helper para obter foto anterior
export function getPreviousPhoto(id) {
  const previousIndex = findPhotoIndex(id) - 1;
  return photos[previousIndex] || null;
}

// Helper para obter próxima foto
export function getNextPhoto(id) {
  const nextIndex = findPhotoIndex(id) + 1;
  return photos[nextIndex] || null;
}

// Helper para obter foto aleatória (diferente da atual)
export function getRandomPhoto() {
  const randomID = Math.floor(Math.random() * photos.length);
  return findPhotoByID(randomID);
}

// Ir para a primeira foto 
export function getFirstPhoto() {
  return photos[0];
}