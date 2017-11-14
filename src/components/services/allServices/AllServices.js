import React from 'react';
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import AllServicesCard from './Card'
import Title from '../../Title'
// import FaMotorcycle from 'react-icons/lib/fa/motorcycle';
// import FaChain from 'react-icons/lib/fa/chain';
// import FaAdjust from 'react-icons/lib/fa/adjust';
// import FaClone from 'react-icons/lib/fa/clone';
// import FaExpeditedssl from 'react-icons/lib/fa/expeditedssl';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';


var styles = {
    wrap: {
        marginBottom: 50
    }
}

class AllServices extends React.PureComponent {
    render() {
        return (
            <Grid style={styles.wrap}>
                <Row className="show-grid">
                    <Col xs={12}>
                        <Title>Our Products</Title>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Mobiles" desc="Sleek Designs which are built only for you"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Smart Phones" desc="Our Smart Phones are really smart"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Tablets" desc="We let you capture your happiest moments with our Tablets"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Power Banks" desc="Travel with your Phone without bothering about it's power"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="Handsfree" desc="Music lives in our specially designed handsfree"
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AllServicesCard subTitle="MISC" desc="And we have many more to offer..."
                            icon={<FaLightbulbO />}
                        />
                    </Col>
                </Row>
            </Grid>


        )
    }
}

AllServices = Radium(AllServices);
export default AllServices;