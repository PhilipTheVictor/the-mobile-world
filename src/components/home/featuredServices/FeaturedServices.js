import React from 'react';
import Radium from 'radium';
import { Grid, Col, Row } from 'react-bootstrap'
import FeaturedServiceCard from './Card'
import Title from '../../Title'
import FaCamera from 'react-icons/lib/fa/camera';
import FaAndroid from 'react-icons/lib/fa/android';
import FaDesktop from 'react-icons/lib/fa/desktop';
import FaCutlery from 'react-icons/lib/fa/cutlery';
import MdBatteryChargingFull from 'react-icons/lib/md/battery-charging-full';
import FaKey from 'react-icons/lib/fa/key';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import FaPaintBrush from 'react-icons/lib/fa/paint-brush';
import FaWrench from 'react-icons/lib/fa/paint-brush';



class FeaturedServices extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
             
                    <Col xs={12}>
                        <Title>Product Features</Title>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Sleek Designs" desc="Our designs make you love them"
                            icon={ <FaWrench />}
                        />
                    </Col>
                <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="High Resolution" desc="Our phones are high resolution so you can catch every moment"
                            icon={ <FaLightbulbO />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Awesome Cameras" desc="Our cameras dont take pics they capture you"
                            icon={ <FaCamera />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Apps" desc="Built-In Apps will take you to new horizons"
                            icon={ <FaAndroid />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Smart Sensors" desc="Sensors make our devices a living miracle"
                            icon={ <FaDesktop />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Gaming Processors" desc="Special Processors to give you a perfect gaming experience"
                            icon={ <FaCutlery />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Long Lasting Batteries" desc="Powerful Batteries to supplement your phone with energy"
                            icon={ <MdBatteryChargingFull />}
                        />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Extra Storage" desc="You don't bother about storage with our phones"
                            icon={ <FaKey />}
                        />
                    </Col>
                  
                    <Col xs={12} sm={6} md={4}>
                        <FeaturedServiceCard title="Warranty" desc="Our 1 year warranty keeps you free of worries"
                            icon={ <FaPaintBrush />}
                        />
                    </Col>
                    

                </Row>
            </Grid>


        )
    }
}

FeaturedServices = Radium(FeaturedServices);
export default FeaturedServices;