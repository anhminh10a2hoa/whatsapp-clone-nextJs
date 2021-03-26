import styled from "styled-components"; 
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import moment from 'moment';

function Message({user, message}) {
  const [userLoggedIn] = useAuthState(auth); 
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  return (
    <Container>
      <TypeOfMessage>
        {message.message} 
        <TimeStamp>{moment(message.timestamp).format('LT')}</TimeStamp>
      </TypeOfMessage>
    </Container>
  )
}

export default Message;

const Container = styled.div`

`;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 10px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #dcf8c6;
`;

const Receiver = styled(MessageElement)`
  text-align: left;
  background-color: whitesmoke;
`;

const TimeStamp = styled.div`
  text-align: right;
  color: gray;
  font-size: 8px;
  margin-top: 10px;
  margin-right: -5px;
`; 