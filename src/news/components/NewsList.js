import React from 'react'
import PropTypes from 'prop-types'

const NewsList = ({ data }) => {
  return (
    <div className={'news-list'}>
      {data.map(item => {
        return (
          <div key={item.id} className={'news-item'}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        )
      })}
    </div>
  )
}

NewsList.proptypes = {
  data: PropTypes.array.isRequired, //TODO: shapeof
}

export default NewsList
