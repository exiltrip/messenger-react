export interface ChatPartner {
    you: boolean,
    peer_id: number,
    chatPartner: string,
    message: string,
    read: boolean,
    time: string,
    unread?: number,
}

