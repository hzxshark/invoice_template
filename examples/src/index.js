import React from 'react';
import { render} from 'react-dom';
import InvoiceTmp from '../../src';
import styled from 'styled-components';

const Container = styled.div`
  margin: 60px auto;
  width:720px;
  padding: 30px 60px;
  box-shadow: 10px 10px 5px #888888;
  background: #f9f9f9;
`;

const App = () => <Container><InvoiceTmp/></Container>;
render(<App />, document.getElementById("root"));