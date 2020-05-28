import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { open, close } from '../modules/form';
import { SEARCH_FORM } from '../constants';

const SearchFormWrapDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  transition: all 0.3s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 14px;
  z-index: 10;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
    z-index: -2;
  }
  ${props =>
    props.open &&
    css`
      box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 28px;
      &::before {
        opacity: 1;
      }
    `}
`;

const SearchFormInnerDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 10%;
  background: #fff;
`;

const SearchButtonDiv = styled.div`
  padding: 20px 0;
`;

const SearchFormDiv = styled.div`
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: all 0.3s;
  ${props =>
    props.open &&
    css`
      height: auto;
    `}
`;

const SearchFormContentsDiv = styled.div`
  padding: 20px 0;
`;

const SearchFormCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10%;
`;

const SearchButton = ({ formType, onOpenForm, title }) => {
  const onClick = () => onOpenForm(formType);
  return <button onClick={onClick}>{title}</button>;
};

const SearchFormContainer = () => {
  const dispatch = useDispatch();
  const { isOpen, viewContents } = useSelector(({ form }) => ({ isOpen: form.isOpen, viewContents: form.viewContents }));
  const onOpenForm = formType => dispatch(open(formType));
  const onCloseForm = () => dispatch(close());

  return (
    <SearchFormWrapDiv open={isOpen}>
      <SearchFormInnerDiv>
        <SearchButtonDiv>
          <SearchButton formType={SEARCH_FORM.TYPE.DATE} title="날짜" onOpenForm={onOpenForm} />
          <SearchButton formType={SEARCH_FORM.TYPE.GUEST} title="인원" onOpenForm={onOpenForm} />
          <SearchButton formType={SEARCH_FORM.TYPE.PRICE} title="요금" onOpenForm={onOpenForm} />
          <button>검색</button>
        </SearchButtonDiv>
        <SearchFormDiv open={isOpen}>
          {viewContents === SEARCH_FORM.TYPE.DATE && <SearchFormContentsDiv>날짜</SearchFormContentsDiv>}
          {viewContents === SEARCH_FORM.TYPE.GUEST && <SearchFormContentsDiv>인원</SearchFormContentsDiv>}
          {viewContents === SEARCH_FORM.TYPE.PRICE && <SearchFormContentsDiv>요금</SearchFormContentsDiv>}
          {isOpen && <SearchFormCloseBtn onClick={onCloseForm}>닫기</SearchFormCloseBtn>}
        </SearchFormDiv>
      </SearchFormInnerDiv>
    </SearchFormWrapDiv>
  );
};

export default SearchFormContainer;
