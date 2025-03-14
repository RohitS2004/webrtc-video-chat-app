import { Room } from "./Room";

export class Manager {
    constructor (
        // This class will be used to manage all the rooms
        private rooms: Room[] = []
    ) {
        this.rooms = rooms;
    }

    addRoom (room: Room) {
        this.rooms.push(room);
    }

    removeRoom(room: Room) {
        this.rooms = this.rooms.filter(r => r.getRoomId() !== room.getRoomId());
    }

    getRoom (roomId: string) {
        return this.rooms.find(r => r.getRoomId() === roomId);
    }
}