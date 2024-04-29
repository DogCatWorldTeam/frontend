import styled from "styled-components";

const MessagesContainer = styled.div`
  width: 90%;
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`

const MessageContainer = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 3px;
`;



function Messages() {
    return (
        <MessagesContainer>
            <MessageContainer>
                채팅 내용
            </MessageContainer>
        </MessagesContainer>
    )
}

export default Messages;