import './index.css'

const VisitedCountries = props => {
  const {countryDetails, toggleRemoveCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onClickRemoveBtn = () => {
    toggleRemoveCountry(id)
  }

  return (
    <li className="countries-visited-card">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="name-remove-card">
        <p className="visited-country-name">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemoveBtn}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
