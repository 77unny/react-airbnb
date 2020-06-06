import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, reset, save } from '../../modules/guest';
import { GUEST } from '../../constants';
import styled from 'styled-components';

const FormGuestWrap = styled.div`
  padding: 0 20%;
`;
const GuestCounterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GeustCounterDiv = styled.div`
  padding: 20px 40px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  p {
    font-size: 16px;
    span {
      display: block;
      margin: 5px 0 10px;
      font-weight: 300;
      font-size: 14px;
      color: #888;
    }
  }
  div > span {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  button {
    width: 30px;
    height: 30px;
    font-size: 16px;
    color: #717171;
    cursor: pointer;
    outline: none;
    border: 1px solid #b7b7b7;
    border-radius: 20px;
    background: #fff;
    &:hover {
      color: #333;
      border: 1px solid #333;
    }
    &:disabled {
      cursor: default;
      color: #ebebeb;
      border: 1px solid #ebebeb;
      &:hover {
        color: #ebebeb;
        border: 1px solid #ebebeb;
      }
    }
  }
  &:first-child {
    border-left: 0;
  }
`;
const ResetBtn = styled.button`
  position: relative;
  width: 70px;
  padding: 10px 15px;
  font-size: 12px;
  color: #333;
  line-height: 1;
  border-radius: 3px;
  border: 1px solid transparent;
  background: #e7e7e7;
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    border: 1px solid #aaa;
    background: #b9b9b9;
  }
`;
const SaveBtn = styled.button`
  position: relative;
  width: 70px;
  padding: 10px 15px;
  margin: 0 5px;
  font-size: 12px;
  color: #fff;
  line-height: 1;
  border-radius: 3px;
  border: 1px solid transparent;
  background: rgb(230, 32, 81);
  background: linear-gradient(90deg, rgba(230, 32, 81, 1) 0%, rgba(218, 13, 101, 1) 100%);
  transition: all 0.3s;
  z-index: 1;
  &:hover {
    border: 1px solid #e62250;
    background: rgb(230, 34, 80);
    background: linear-gradient(90deg, rgba(230, 34, 80, 1) 0%, rgba(230, 34, 80, 1) 100%);
  }
`;
const GuestCounter = ({ type, title, subtitle, count, onIncrease, onDecrease }) => {
  const onClickIncrease = () => onIncrease(type);
  const onClickDecrease = () => onDecrease(type);

  return (
    <GeustCounterDiv>
      <p>
        {title}
        <span>{subtitle}</span>
      </p>
      <div>
        <button onClick={onClickDecrease} disabled={count === 0 && true}>
          -
        </button>
        <span>{count}</span>
        <button onClick={onClickIncrease}>+</button>
      </div>
    </GeustCounterDiv>
  );
};

const FormGuest = () => {
  const dispatch = useDispatch();
  const { adults, children, infants, totalGuest } = useSelector(state => ({
    adults: state.guest.adults,
    children: state.guest.children,
    infants: state.guest.infants,
    totalGuest: state.guest.totalGuest,
  }));
  const onIncrease = data => dispatch(increase(data));
  const onDecrease = data => dispatch(decrease(data));
  const onReset = () => dispatch(reset());
  const onSave = () => dispatch(save());
  return (
    <FormGuestWrap>
      <p>총 인원 : {totalGuest ? totalGuest : 0}</p>
      <GuestCounterWrap>
        <GuestCounter
          type={GUEST.ADULTS.TYPE}
          title={GUEST.ADULTS.TITLE}
          subtitle={GUEST.ADULTS.SUBTITLE}
          count={adults}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <GuestCounter
          type={GUEST.CHILDREN.TYPE}
          title={GUEST.CHILDREN.TITLE}
          subtitle={GUEST.CHILDREN.SUBTITLE}
          count={children}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <GuestCounter
          type={GUEST.INFANTS.TYPE}
          title={GUEST.INFANTS.TITLE}
          subtitle={GUEST.INFANTS.SUBTITLE}
          count={infants}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </GuestCounterWrap>
      <ResetBtn onClick={onReset}>초기화</ResetBtn>
      <SaveBtn onClick={onSave}>저장</SaveBtn>
    </FormGuestWrap>
  );
};

export default FormGuest;
