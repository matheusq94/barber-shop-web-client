import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};
  -webkit-box-shadow: ${props =>
    props.past ? 'none' : '0px 6px 6px 0px rgba(0, 0, 0, 0.3)'};
  box-shadow: ${props =>
    props.past ? 'none' : '0px 6px 6px 0px rgba(0, 0, 0, 0.3)'};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#4cd137')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
