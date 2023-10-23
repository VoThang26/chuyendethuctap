
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputCompunent from '../InputCompunent/InputCompunent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ButtoninputSearch = (props) => {
    const { size, placeholder, textButton,
        bordered, backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(10, 104, 255)',
        colorButton = '#fff'
    } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputCompunent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{
                    backgroundColor: backgroundColorInput,
                    borderRadius: '1px',
                }}
                {...props}
            />
            <ButtonComponent
                size={size}
                styleButton={{
                    background: backgroundColorButton, border: !bordered && 'none', borderRadius: '1px',
                }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}

            />
        </div>
    )
}

export default ButtoninputSearch