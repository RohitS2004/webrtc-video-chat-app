import { User } from "./User";

export class Room {
    constructor (
        private id: string,
        private users: User[],
        private maxUsers: number = 2,
    ) {
        this.id = id,
        this.users = users;
        this.maxUsers = maxUsers;

    }

    getRoomId () {
        return this.id;
    }

    addUser (user: User) {
        // Only add when the users length is less than maxUsers
        if (this.users.length < this.maxUsers) {
            this.users.push(user);
        }
    }

    removeUser(user: User) {
        // Remove the user from the users array, and when there is only one user left, remove this room from the Rooms array
        if (this.users.length === 2) {
            this.users = this.users.filter(u => u.getRoomId() !== user.getRoomId());
        }
    }

}