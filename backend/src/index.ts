import { WebSocketServer, WebSocket } from "ws";
import { Manager } from "./Manager";
import { handleRoomCreate, handleRoomJoin } from "./Handlers";

const wss = new WebSocketServer({ port: 8080 });
export const manager: Manager = new Manager([]);

type TMessage = "create" | "join" | "leave"
export interface IPayload {
    roomId?: string,
    offer?: RTCSessionDescription,
    answer?: RTCSessionDescription,
    candidates?: RTCIceCandidate[]
}

interface IMessage {
    type: TMessage,
    payload: IPayload
}

wss.on("connection", (socket: WebSocket) => {
    console.log("New client connected!");

    socket.on("message", (message: IMessage) => {

        switch (message.type) {
            case "create": {
                handleRoomCreate(socket, message.payload);
                break;
            }

            case "join": {
                handleRoomJoin(socket, message.payload)
                break;
            }
        }
    })
})

// When the message is create then a new room should be created and the user should be added to that room
// When the message is join then the user should be added to the room with the given room id
// When the message is leave the user should be removed from the room, if there is only one participant left in the room then the room should be removed from the manager
// When the message is offer we should set the offer for the user 
// When the message is answer we should set the answer for the user
// When the message is candidate we should add the candidate to the user's ice candidates list 
// Whenever the room gets two users then the offer and the answer should be exchanges between the users and the candidates should be exchanged as well
// 