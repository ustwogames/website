import React, { PropTypes } from "react"
import Helmet from "react-helmet"

import Page from "../Page"
import FaqList from "../../components/FaqList"
import Button from "../../components/Button"

const Contact = (props, { metadata: { settings } }) => {
  return (
    <Page
      { ...props }
    >
      <Helmet
        script={ [
          {"type": "text/javascript", "innerHTML": `
            function initMap() {
              var uluru = {lat: 51.479877, lng: -0.113582};
              var map = new google.maps.Map(document.getElementById('map'), {
                center: uluru,
                zoom: 16,
                styles: [{"elementType":"labels","stylers":[{"visibility":"off"},{"color":"#f49f53"}]},{"featureType":"landscape","stylers":[{"color":"#f9ddc5"},{"lightness":-7}]},{"featureType":"road","stylers":[{"color":"#813033"},{"lightness":43}]},{"featureType":"poi.business","stylers":[{"color":"#645c20"},{"lightness":38}]},{"featureType":"water","stylers":[{"color":"#1994bf"},{"saturation":-69},{"gamma":0.99},{"lightness":43}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#f19f53"},{"weight":1.3},{"visibility":"on"},{"lightness":16}]},{"featureType":"poi.business"},{"featureType":"poi.park","stylers":[{"color":"#645c20"},{"lightness":39}]},{"featureType":"poi.school","stylers":[{"color":"#a95521"},{"lightness":35}]},{},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#813033"},{"lightness":38},{"visibility":"off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType":"labels"},{"featureType":"poi.sports_complex","stylers":[{"color":"#9e5916"},{"lightness":32}]},{},{"featureType":"poi.government","stylers":[{"color":"#9e5916"},{"lightness":46}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","stylers":[{"color":"#813033"},{"lightness":22}]},{"featureType":"transit","stylers":[{"lightness":38}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#f19f53"},{"lightness":-10}]},{},{},{}]
                });
              var marker = new google.maps.Marker({
                position: uluru,
                map: map
              });
            }`
          },
          {"type": "text/javascript", "src": "https://maps.googleapis.com/maps/api/js?key=AIzaSyC5pWn6imufG6UZuXgMDixqhQvdR0DiVo8&callback=initMap", "async": true, "defer": true}
        ] }
      />
      <Button big>Initiate Contact ticket</Button>
      <h2>FAQs</h2>
      <FaqList faqs={ settings.faqs } />
    </Page>
  )
}

Contact.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Contact
