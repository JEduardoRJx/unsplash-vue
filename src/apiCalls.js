/* eslint-disable no-console */
// const accKey = 'ab3027cec37ea90bdc0cd87ba2a9a21724432ed78fce635c435f9f67f16bbbca'
const accKey2 = 'aef461ed8867166f80a247e0f33bc7131aee02e22ca16c434933b579284bd9dd';

export const randomPhoto = async () => {
  const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${accKey2}`)
  if(!response.ok) {
    throw Error ("Couldn't get random image")
  }
  return response.json();
}