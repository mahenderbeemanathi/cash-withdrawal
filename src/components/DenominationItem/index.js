// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amount, updateAmount} = props
  const {value} = amount
  const onClickButton = () => {
    updateAmount(value)
  }
  return (
    <li>
      <button onClick={onClickButton} className="button" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
