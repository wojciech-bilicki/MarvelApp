import React from 'react';
import styled from 'styled-components';

const ComicThumbWrapper = styled.div`
  margin: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin-bottom: 8px;
  }

  h4 {
    text-align: center;
  }
`;

const ComicsThumb = ({ comics }) =>
  <ComicThumbWrapper>
    <img src={comics.cover} />
    <h4>
      {comics.title} - {comics.editor}
    </h4>
  </ComicThumbWrapper>

export default ComicsThumb;