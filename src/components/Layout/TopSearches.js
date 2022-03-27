import React from 'react'
import RingtoneBox from '../Common/RingtoneBox'

let dummyData = [
  {
    titile: 'Lorem Iprem 1',
    cretedBy: 'Kamal 1'
  },
  {
    titile: 'Lorem Iprem 2',
    cretedBy: 'Kamal 2'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  },
  {
    titile: 'Lorem Iprem 3',
    cretedBy: 'Kamal 3'
  }
]

export default function TopSearches () {
  return (
    <>
      <section className='top-searchs'>
        <h3 className='text-center heading'>Previous top Searchs </h3>
        <div className='container'>
          <div className='row'>
            {dummyData.map((data,key) => (
              <RingtoneBox key={key} titile={data.titile} cretedBy={data.cretedBy} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
