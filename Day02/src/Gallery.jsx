import { useState } from 'react'
import './App.css'

function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
        <Profile
          name={"Maria Skłodowska-Curie"}
          imageUrl={"szV5sdG"}
          imageSize={70}
          profession={"physicist and chemist"}
          awardsCount={4}
          awards={"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"}
          discovered={"polonium (chemical element)"}
        />
        <Profile
          name={"Katsuko Saruhashi"}
          imageUrl={"YfeOqp2"}
          imageSize={70}
          profession={"geochemist"}
          awardsCount={2}
          awards={"Miyake Prize for geochemistry, Tanaka Prize"}
          discovered={"a method for measuring carbon dioxide in seawater"}
        />
    </div>
  );
}

function Profile({ name, imageUrl, imageSize = 70, profession, awardsCount, awards, discovered}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageUrl)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awardsCount} </b>
            ({awards})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
    </section>
  )
}

