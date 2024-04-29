import styled from "styled-components";
import InfoBar from "../components/chat/InfoBar";
import Messages from "../components/chat/Messges";
import Input from "../components/chat/Input";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background: rgba(0, 0, 0, 0.45);
`;

const Modal = styled.div`
  position: fixed;
  border: 1px solid #F6D9D9;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 60rem;
  height: 50rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


function Chat() {
    return (
        <div>
            <Backdrop />
            <Modal>
                <InfoBar />
                <Messages />
                <Input />
            </Modal>
        </div>
    )
}

export default Chat;