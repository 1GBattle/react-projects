import faker from 'faker'
import Comments from './components/Comments'

const App = () => {
  return (
    <>
      <Comments
        image={faker.image.avatar()}
        userName={faker.internet.userName()}
        comment={faker.lorem.sentences(Math.floor(Math.random() * 10) + 1)}
        timePosted={faker.time.recent()}
      />
      <Comments
        image={faker.image.avatar()}
        userName={faker.internet.userName()}
        comment={faker.lorem.sentences(2)}
        timePosted={faker.time.recent()}
      />
      <Comments
        image={faker.image.avatar()}
        userName={faker.internet.userName()}
        comment={faker.lorem.sentences(2)}
        timePosted={faker.time.recent()}
      />
    </>
  )
}

export default App
