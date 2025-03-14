import { WebSocket } from "ws";
import { User } from "./User";
import { IPayload, manager } from ".";
import { generateRandomId } from "./Utility";
import { Room } from "./Room";

export const handleRoomCreate = (socket: WebSocket, payload: IPayload) => {
    // How the room should be created?
    // First a user of type User should be created 
    // A utility function should be created to generate random id
    // A room should be created with the user and the random id
    // This room then should be added the manager
    // Send the room id to the user on the frontend

    // * At the time of creation the user will send his candidates and offer to the server
    // * The server will add those to the user's object
    
    const roomId = generateRandomId();
    const user = new User(socket, payload.offer, undefined, payload.candidates!, roomId);
    const room = new Room(roomId, [user], 2);
    manager.addRoom(room);

    socket.send(roomId);
}

export const handleRoomJoin = (socket: WebSocket, payload: IPayload) => {
    // How the user should be added to the existing room?
    // First check if any room with the given id exists or not
    // If yes then create a user
    // Then find the room from the manager and add this user to that particular room
    // Send the room id to the user on the frontend

    // * At the time of joining the user will send his answer to the server along with his candidates 
    // * Those will be added to the user's object 
    // * At the same time these the answer and the candidates will be added to the another user's object 
    // * And the first user's offer and candidates will be added to this user's object
    // * And at last the both the users will send these offer, answer, candidates to themselves on the frontend, since everything is exchanges on the server side only

    const user = new User(socket, undefined, payload.answer, payload.candidates!, payload.roomId!);
    
    if (manager.getRoom(payload.roomId!) == undefined) {
        socket.send("Room not found!");
        return;
    }

    const room = manager.getRoom(payload.roomId!);
    room?.addUser(user);

    const [user1, user2] = room!.getUsers();
    user1.setAnswer(payload.answer!);
    user1.addCandidates(payload.candidates!);

    user2.setOffer(user1.getOffer()!);
    user2.addCandidates(user1.getCandidates());

    user1.getSocket()
    .send(JSON.stringify({
        type: "answer",
        payload: {
            answer: user2.getAnswer(),
            candidates: user2.getCandidates()
        }
    }))

    user2.getSocket()
    .send(JSON.stringify({
        type: "offer",
        payload: {
            offer: user1.getOffer(),
            candidates: user1.getCandidates(),
            answer: user2.getAnswer()
        }
    }))
}