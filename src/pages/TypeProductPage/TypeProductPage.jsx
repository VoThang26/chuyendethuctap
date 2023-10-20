import React from 'react'
import NavbarComponent from '../../component/NavbarComponent/NavbarComponent'
import CardComponent from '../../component/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavbar, WrapperProducts } from './style'

const TypeProductPage = () => {
    const onChange = () => { }

    return (
        <div style={{ width: '100%', background: '#efefef' }}>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
                    <WrapperNavbar span={4} >
                        <NavbarComponent />
                    </WrapperNavbar>
                    <Col span={20}>
                        <WrapperProducts span={20}>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </WrapperProducts>
                    </Col>
                </Row>
                <Pagination defaultCurrent={2} total={100} onChange={onChange}
                    style={{ textAlign: 'center', marginTop: '10px' }}
                />
            </div>
        </div>
    )
}

export default TypeProductPage