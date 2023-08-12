import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onSubstract = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="user-profile-card">
          <div className="profile-container">
            <div className="profile-logo">
              <h1 className="logo-name">S</h1>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <p className="balance-count">
              {balance}
              <br />
              <span className="ruppes">in Rupees</span>
            </p>
          </div>
          <p className="heading">Withdraw</p>
          <p className="sub-heading">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupees-tabs-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationRupeesTab={eachItem}
                key={eachItem.id}
                onSubstract={this.onSubstract}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
