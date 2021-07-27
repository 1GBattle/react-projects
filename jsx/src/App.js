const App = () => {
  const buttonText = { text: 'someText' }
  return (
    <>
      <label className='label' htmlFor='ame'>
        Enter Name
      </label>
      <input id='name' type='text'></input>
      <button
        onClick={() => console.log('submit')}
        style={{ backgroundColor: 'skyblue', color: 'white' }}
      >
        {buttonText.text}
      </button>
    </>
  )
}

export default App
