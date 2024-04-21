//allows user to connect to all the chats they have
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const   ChatsPage = (props) => {
    return (
    <div style = {{ height: '100vh'}}>
    <PrettyChatWindow
        projectId='b5e6fdae-1eeb-4512-8a2a-c413f7bf0638'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
    />
    </div>
    )
}

export default ChatsPage