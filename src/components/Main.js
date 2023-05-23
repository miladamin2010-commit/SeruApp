import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)

  return (
    <div className='container'>
        <h1 className='title text-light'>Seru Tfl Demo Application</h1>

        <ol>
            <li>You will be asked 10 questions.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>To Pass, you will need to get 80 points</li>
            <li>Each question has four options. You can choose only one option.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be displayed at the end of the quiz.</li>
        </ol>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start</Link>
        </div>

    </div>
  )
}
