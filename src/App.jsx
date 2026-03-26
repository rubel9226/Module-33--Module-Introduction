import { Suspense } from 'react';
import './App.css'
import Countries from './Countries/Countries'


const countriesPromise = fetch ('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());


function App() {


  return (
    <>
      <h1>Build Your App</h1>
      <Suspense fallback={<h2>Countries is Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
