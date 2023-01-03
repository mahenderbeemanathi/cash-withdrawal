// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg">
        <div className="name-container">
          <p className="symbol">s</p>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance-title">Your Balance</p>
          <div>
            <p className="balance">{balance}</p>
            <p className="type">In Rupees</p>
          </div>
        </div>
        <p className="with">Withdraw</p>
        <p className="choose">CHOOSE SUM (IN RUPEES)</p>
        <ul className="button-container">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              amount={each}
              updateAmount={this.updateAmount}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
