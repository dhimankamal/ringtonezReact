import React from 'react'
import Button from '../Ui/Button'
import SinglePost from './SinglePost'

let dummydata = [
  {
    title: 'Lorem Ipsum is simply dummy text',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    tags: ['tags1', 'tags2', 'tags3'],
    image: './img/posts/maxresdefault (1).jpg',
    date: '10 Jan 2022'
  },
  {
    title: 'Lorem Ipsum is simply dummy text2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    tags: ['tags1', 'tags2'],
    image: './img/posts/maxresdefault (2).jpg',
    date: '11 Jan 2022'
  },

  {
    title: 'Lorem Ipsum is simply dummy text3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    tags: ['tags1', 'tags2'],
    image: './img/posts/maxresdefault (3).jpg',
    date: '12 Jan 2022'
  },
  {
    title: 'Lorem Ipsum is simply dummy text4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    tags: ['tags1', 'tags2'],
    image: './img/posts/maxresdefault.jpg',
    date: '12 Jan 2022'
  }
]

export default function Post () {
  let activateLasers = () => {
    console.log('clicked')
  }
  return (
    <>
      <section className='posts'>
        <h3 className='text-center heading'>Latest Posts</h3>
        <div className='container'>
          <div className='row'>
            {dummydata.map((figure, key) => {
              return <SinglePost key={key} {...figure} />
            })}
          </div>
          <Button name='Load More' onclick={activateLasers} />
        </div>
      </section>
    </>
  )
}
