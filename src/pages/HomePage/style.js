import styled from "styled-components";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";

export const WrapprtTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  height: 44px;
  font-size: 20px;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: #9255fd;
    span {
      color: #fff;
    }
  }
  width: 100%;
  color: #9255fd;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointers")};
`;

export const WrapperProducts = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
