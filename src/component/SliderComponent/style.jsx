import Slider from 'react-slick'
import styled from "styled-components";

export const WarpperSliderStyle = styled(Slider)`
& .slick-arrow.slick-prev {
    left:12px;
    top:50%;
    z-index:10;
    &::before{
        font-size:40px;
        color:#fff;
    }
}
& .slick-arrow.slick-next{
    right:20px;
    top:50%;
    z-index:10;
    &::before{
        font-size:40px;
        color:#fff;
    }
}
& .slick-dots{
    z-index:10;
    bottom: -2px !important;
    li{import { Slider } from 'react-slick';

        button{
            &::before{
                color:rgb(255,255,0.5);
            }
        }
    }
    li.active{
        button{
            &::before{
                color:#fff;
            }
        }
    }
}
`