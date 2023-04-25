import React from 'react'

export default function Gallery() {

  let imgArr = []
  for (let i = 1; i <= 30; i++) {
      imgArr.push(
        <div>
          <img key={`galleryImg${i}`} src={`../src/public/images/gbpgallery${i}.jpeg`} alt={`galleryimg${i}`} className="w-full h-full rounded object-cover" />
        </div>
      )
    }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-6 h-4/5 gap-2">
        {imgArr}
      </div>
    </div>
  );
}
