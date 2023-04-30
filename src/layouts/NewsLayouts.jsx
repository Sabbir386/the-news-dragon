import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/Leftnav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Category from '../pages/Home/category/category';
import { Outlet } from 'react-router-dom';

const NewsLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>

                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>

                    </Col>
                </Row>

            </Container>

            <Footer></Footer>

        </div>
    );
};

export default NewsLayouts;