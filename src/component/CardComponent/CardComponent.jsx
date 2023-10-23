
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDisscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/chinhang.png'
import { useNavigate } from 'react-router-dom';


const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, selled, discount, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() => handleDetailsProduct(id)}
        >
            <img src={logo} alt="Logo"
                style={{
                    width: '68px', height: '14px', position: 'absolute',
                    top: 0, left: 0, borderTopLeftRadius: '4px'
                }} />

            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating}</span><StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                </span>
                <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}> {price?.toLocaleString()} VND</span>
                <WrapperDisscountText>
                    - {discount || 5}%
                </WrapperDisscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent