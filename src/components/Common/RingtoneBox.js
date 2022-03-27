import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export default function RingtoneBox (props) {
  return (
    <>
      <div className='col-md-4'>
        <div className='play-box'>
          <ReactAudioPlayer src='https://musikringtone.com/saved_ringtones/TodatodapyarhuatumseRingtone1486192735.mp3'  />
          <img src='./img/play-button-arrowhead.png' alt='play-button' />
          <div>
            <h4>{props.titile}</h4>
            <p>{props.cretedBy}</p>
          </div>
        </div>
      </div>
    </>
  )
}
