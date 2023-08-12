import './index.css'

const DenominationItem = props => {
  const {denominationRupeesTab, onSubstract} = props
  const {value} = denominationRupeesTab

  const onClickingRupeeTab = () => {
    onSubstract(value)
  }

  return (
    <li className="list-items">
      <div className="btn-container">
        <button type="button" className="btn" onClick={onClickingRupeeTab}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
