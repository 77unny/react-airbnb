import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';

const SearchListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
`;

const SearchList = ({ data }) => {
  const SET_NUMBER = 20;
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(SET_NUMBER);
  const [searchList, setSearchList] = useState(data.slice(startPoint, endPoint));

  const test = () => {
    return setStartPoint(startPoint + SET_NUMBER);
  };

  useEffect(() => {
    setEndPoint(endPoint + SET_NUMBER);
    setSearchList(searchList.concat(data.slice(startPoint, endPoint)));
    console.log('endPoint 변경', startPoint, endPoint);
  }, [startPoint]);

  return (
    <SearchListDiv>
      {searchList.map((accommodation, index) => {
        return <SearchItem key={index} contents={accommodation} width="25%" />;
      })}
      <button onClick={test}>더보기</button>
    </SearchListDiv>
  );
};

export default SearchList;
