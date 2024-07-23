import './index.css'

const Countries = props => {
  const {countryDetails, toggleVisitedCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitBtn = () => {
    toggleVisitedCountry(id)
  }

  return (
    <>
      <li className="countries-names-card">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="visited-para">Visited</p>
        ) : (
          <button className="visit-btn" type="button" onClick={onClickVisitBtn}>
            Visit
          </button>
        )}
      </li>
      <hr className="hr-line" />
    </>
  )
}

export default Countries
