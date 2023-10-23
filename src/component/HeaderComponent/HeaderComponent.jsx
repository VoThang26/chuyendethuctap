import React, { useEffect, useState } from 'react'
import { Badge, Col, Popover } from 'antd'
import { WarpperContentPopup, WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtoninputSearch from '../ButtoninputSearch/ButtoninputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/sliders/userSlide'
import { Loading } from '../LoadingComponent/Loading';
import { searchProduct } from '../../redux/sliders/productSlide';


const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const handleNavigateLogin = () => {
        navigate('/sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() => {
        setLoading(true)
        setUserName(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    }, [user?.name, user?.avatar])

    const content = (
        <div>
            <WarpperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WarpperContentPopup>
            {user?.isAdmin && (
                <WarpperContentPopup onClick={() => navigate('/system/admin')}>Quản lí hệ thống</WarpperContentPopup>
            )}
            <WarpperContentPopup onClick={handleLogout}>Đăng xuất</WarpperContentPopup>

        </div>
    );

    const onSearch = (e) => {
        setSearch(e.target.value)
        dispatch(searchProduct(e.target.value));
    }

    return (
        <div style={{ width: '100%', background: 'rgb(26,148,255)', display: 'flex', justifyContent: 'center' }}>
            <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>
                <Col span={5}>
                    <WrapperTextHeader onClick={() => navigate('/')}>SHOPCOLO</WrapperTextHeader></Col>
                {!isHiddenSearch && (
                    <Col span={13}>
                        <ButtoninputSearch
                            size="large"
                            bordered={false}
                            textButton="Tim Kiem"
                            placeholder="input search text"
                            onChange={onSearch}
                        /></Col>
                )}


                <Col span={6} style={{ display: 'flex', gap: '54px', alignItems: 'center' }} >
                    <Loading isLoading={loading}>

                        <WrapperHeaderAccount>
                            {userAvatar ? (
                                <img src={userAvatar} alt="avatar" style={{
                                    height: '50px',
                                    width: '50px',
                                    borderRadius: '50%',
                                    objectFit: 'cover'
                                }} />
                            ) : (
                                <UserOutlined style={{ fontSize: '30px' }} />
                            )}

                            {user?.access_token ? (
                                <>
                                    <Popover content={content} trigger="click">
                                        <div style={{ cursor: 'pointer' }} >{userName?.length ? userName : user?.email}</div>
                                    </Popover>
                                </>
                            ) : (
                                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                                    <WrapperTextHeaderSmall>Dang nhap/Dang Ky</WrapperTextHeaderSmall>
                                    <div>
                                        <WrapperTextHeaderSmall>Tai Khoan</WrapperTextHeaderSmall>
                                        <CaretDownOutlined style={{ color: '#fff' }} />
                                    </div>
                                </div>
                            )}
                        </WrapperHeaderAccount>
                    </Loading>
                    {!isHiddenCart && (
                        <div onClick={() => navigate('/order')} style={{ cursor: 'pointer' }}>
                            <Badge count={4} size='small'>
                                <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                            </Badge>
                            <WrapperTextHeaderSmall>Gio Hang</WrapperTextHeaderSmall>
                        </div>
                    )}

                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent