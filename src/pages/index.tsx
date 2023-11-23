import './home.sass'
import { Text } from './components/text'

export default function Page() {
  return (
    <div className='home'>
      <h2>Hello People!</h2>
      <div>
        <Text />
      </div>
    </div>
  )
}