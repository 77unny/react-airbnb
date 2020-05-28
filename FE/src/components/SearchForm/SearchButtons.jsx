import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SEARCH_FORM } from '../../constants';

const SearchButtonDiv = styled.div`
  padding: 20px 0;
`;
const SearchButton = ({ formType, onOpenForm, title }) => {
  const onClick = () => onOpenForm(formType);
  return <button onClick={onClick}>{title}</button>;
};

const SearchButtons = ({ onOpenForm }) => {
  const { checkInDate, checkOutDate } = useSelector(state => state.date);
  const dateCompleted = `${checkInDate} - ${checkOutDate}`;

  return (
    <SearchButtonDiv>
      <SearchButton
        formType={SEARCH_FORM.TYPE.DATE}
        title={checkInDate ? (checkOutDate ? dateCompleted : checkInDate) : '날짜'}
        onOpenForm={onOpenForm}
      />
      <SearchButton formType={SEARCH_FORM.TYPE.GUEST} title="인원" onOpenForm={onOpenForm} />
      <SearchButton formType={SEARCH_FORM.TYPE.PRICE} title="요금" onOpenForm={onOpenForm} />
      <button>검색</button>
    </SearchButtonDiv>
  );
};

export default SearchButtons;
