import Card from 'react-bootstrap/Card';
import React from 'react';
import PropTypes from 'prop-types';



function FeatureNavigation({ image, shortText, title }) {
  return (
    <React.Fragment>
      <Card className='cardStyles mb-4' style={{minHeight: "80%",  borderRadius: "5px"}}>
        <Card.Img variant="top" src={ image } style={{ height:"330px", objectFit: "cover"}} />
        <Card.Body>
          <Card.Title style={{fontSize: "4.5rem", textAlign: "center"}}>{ title }</Card.Title>
          <Card.Text className='success p-4' text={'success'} style={{fontSize: "3rem"}}>
            { shortText }
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default FeatureNavigation

FeatureNavigation.propTypes = {
  shortText: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
}