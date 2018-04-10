import React, { Component, PropTypes } from 'react'
import OwlCarousel from 'react-owl-carousel'
import VenueCarouselItem from './VenueCarouselItem'
import VenueCategory from '../../containers/VenueCategoryContainer'

class VenueCarousel extends Component {
  componentDidMount () {
    const { getVenues } = this.props
    getVenues()
  }

  render () {
    const { allVenues } = this.props
    return (
      <div className='pbxl phl phm-desktop'>
        <div className='max-width'>
          <VenueCategory />
          <OwlCarousel slideSpeed={300} items={3} navigationText={[]} navigation autoPlay>
            { allVenues.map(venue => <VenueCarouselItem key={venue.id} venue={venue} />) }
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

VenueCarousel.propTypes = {
  allVenues: PropTypes.array.isRequired,
  getVenues: PropTypes.func.isRequired
}
export default VenueCarousel
