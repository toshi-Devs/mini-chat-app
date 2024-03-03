import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(

        '65181ce0-77dd-41ea-b96b-8428149450c4',
        props.user.username,
        props.user.secret
    );
    
    return (

    <div style={{ height: '100vh' }}>

        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>

    </div>

  )
}

export default ChatsPage;