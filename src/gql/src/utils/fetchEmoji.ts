import fetch from 'node-fetch';

const fetchEmoji = async () => {
  const url =
    'https://emoji-api.com/categories/smileys-emotion?access_key=72ad0865eaaa56c651bb48e0d75d2439ebd90849';

  console.log('CALLED');
  return await fetch(url).then((response) => response.json());
};

export { fetchEmoji };
