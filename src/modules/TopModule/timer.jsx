import React, { Component } from 'react';
import styled from 'styled-components';

function setZeros(i) {
  if (i < 10) return `0${i}`;
  return i;
}

class Counter extends Component {
  constructor() {
    super();
    // eslint-disable-next-line no-unused-vars
    let intrvl;
    this.state = {
      s: '00',
      m: '00',
    };

    this.startTimer = () => {
      if (this.start === 1) return;
      this.start = 1;
      let ss = 0;
      let mm = 0;
      intrvl = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        ss++;
        if (ss === 60) {
          ss = 0;
          // eslint-disable-next-line no-plusplus
          mm++;
        }
        this.setState({
          s: setZeros(ss),
          m: setZeros(mm),
        });
      }, 1000);
    };
  }

  render() {
    const { s, m } = this.state;
    this.startTimer();
    return (
      <CustomCounter>
        <h3>{`${m}:${s}`}</h3>
      </CustomCounter>
    );
  }
}

const CustomCounter = styled.div`
  color: red;
  font-weight: 700;
  font-size: 32px;
  margin: auto;
`;

export default Counter;
