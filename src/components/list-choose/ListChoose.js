import React, { Component } from 'react';
import './Listchoose.css';
import { Container, Col, Row, Card, CardImg } from "react-bootstrap";

class ListChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product1: [
                {
                    img1:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/luxury.jpg",
                    name1: "luxury"
                },
                {
                    img1:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/deluxe.jpg",
                    name1: "deluxe"
                },
                {
                    img1:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/budger.jpg",
                    name1: "budget"
                }
            ],
            product2: [
                {
                    img2:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/luxury.jpg",
                    name2: "newest"
                },
                {
                    img2:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/deluxe.jpg",
                    name2: "best cruises"
                }
            ],
            product3: [
                {
                    img3:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/luxury.jpg",
                    name3: "honeymoon"
                },
                {
                    img3:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/deluxe.jpg",
                    name3: "family"
                },
                {
                    img3:
                        "https://d1k2oi80tv211b.cloudfront.net/hvn/images/home/cruise-halong/budger.jpg",
                    name3: "group"
                }
            ]
        };
    }
    render() {
        const { product1, product2, product3 } = this.state;
        return (
            <div className="ListChoose">
                <div className="container">
                    <h2>Choose Your Best Halong Bay Cruises</h2>
                    <div>
                        <Row className="Row-1">
                            {product1.map(product => (
                                <Col sm="4">
                                    <a href="#">
                                        <Card>
                                            <CardImg top width="100%" src={product.img1} />
                                            <p className="name-img">{product.name1}</p>
                                        </Card>
                                    </a>
                                </Col>
                            ))}
                        </Row>

                        <Row className="Row-2">
                            {product2.map(product => (
                                <Col sm="6">
                                    <a href="#">
                                        <Card>
                                            <CardImg top width="100%" src={product.img2} />
                                            <p className="name-img">{product.name2}</p>
                                        </Card>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                        <Row className="Row-3">
                            {product3.map(product => (
                                <Col sm="4">
                                    <a href="#">
                                        <Card>
                                            <CardImg top width="100%" src={product.img3} />
                                            <p className="name-img">{product.name3}</p>
                                        </Card>
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListChoose;