import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

import { FaGooglePlusG, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>login with</h2>
            <Button className='mb-2' variant="outline-primary"><FaGooglePlusG /> Login with google</Button > {' '}

            < Button variant="outline-secondary" > <FaGithub />  Login with github</Button > {' '}
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /></ListGroup.Item>
                    <ListGroup.Item><FaTwitter /></ListGroup.Item>
                    <ListGroup.Item><FaInstagram /></ListGroup.Item>

                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />

            </div>

        </div >


    );
};

export default RightNav;