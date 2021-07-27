import faker from 'faker'
import ApprovalCard from './components/Approval-Card'
import Comments from './components/Comments'

const App = () => {
  return (
    <>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
        </div>
        Are you sure
      </ApprovalCard>
      <ApprovalCard>
        <Comments
          image={faker.image.avatar()}
          userName={faker.internet.userName()}
          comment={faker.lorem.sentences(2)}
          timePosted={faker.time.recent()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comments
          image={faker.image.avatar()}
          userName={faker.internet.userName()}
          comment={faker.lorem.sentences(2)}
          timePosted={faker.time.recent()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comments
          image={faker.image.avatar()}
          userName={faker.internet.userName()}
          comment={faker.lorem.sentences(2)}
          timePosted={faker.time.recent()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comments
          image={faker.image.avatar()}
          userName={faker.internet.userName()}
          comment={faker.lorem.sentences(2)}
          timePosted={faker.time.recent()}
        />
      </ApprovalCard>
    </>
  )
}

export default App
