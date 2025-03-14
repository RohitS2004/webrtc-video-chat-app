import { WebSocket } from "ws";

export class User {
    constructor (
        // This class will define what all attributes a user object will contain
        private socket: WebSocket,
        private offer: RTCSessionDescription | undefined,
        private answer: RTCSessionDescription | undefined,
        private candidates: RTCIceCandidate[],
        private roomId: string,
    ) {
        this.socket = socket
        this.offer = offer
        this.answer = answer
        this.candidates = candidates
        this.roomId = roomId
    }

    public getSocket = () => this.socket
    public getOffer = () => this.offer;
    public getAnswer = () => this.answer;
    public getCandidates = () => this.candidates;
    public getRoomId = () => this.roomId;

    public setOffer = (offer: RTCSessionDescription) => this.offer = offer;
    public setAnswer = (answer: RTCSessionDescription) => this.answer = answer;
    public addCandidates = (candidates: RTCIceCandidate[]) => {
        this.candidates = [...this.candidates, ...candidates]
    }
    public setRoomId = (roomId: string) => this.roomId = roomId; 
}