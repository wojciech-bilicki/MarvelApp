import React from 'react';
import styled from 'styled-components';

import { getComics } from './api';

const ComicsWrapper = styled.div`
  margin: 32px;
  background-color: white;
  display: flex;

  .header-wrapper {
    margin: 16px;
  }
`;

class Comics extends React.Component {
  state = {
    comicBook: {}
  };

  componentDidMount = () => {
    getComics([this.props.match.params.comicsId]).then(comics =>
      this.setState({ comicBook: comics[0] })
    );
  };

  render() {
    const { comicBook } = this.state;
    return (
      <ComicsWrapper>
        <div className="header-wrapper">
          <h1>
            {comicBook.title}
          </h1>
          <img src={comicBook.cover} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            {comicBook.description}
          </p>
          <p style={{ color: 'red' }}>
            {comicBook.editor}
          </p>
        </div>
      </ComicsWrapper>
    );
  }
}

export default Comics;
