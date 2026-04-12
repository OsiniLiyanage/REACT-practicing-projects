import Capitalize from '../utils/capitalize'

function Text() {

    const testData = 'this is the text';
  return (
    <div>
        <h1>{Capitalize(testData)}</h1>
    </div>
  )
}

export default Text