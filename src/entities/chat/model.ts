import {createStore, createEvent} from 'effector';
import {ChatPartner} from './types';

const mockChatPartners: ChatPartner[] = [
    {
        "you": false,
        "peer_id": 1,
        "chatPartner": "Екатерина Желудь",
        "message": "чд?", "read": true, "time": "19:10"
    },
    {
        "you": true,
        "peer_id": 2,
        "chatPartner": "Антон Педалин",
        "message": "ок. тогда не забудь сдать это до дд",
        "read": false,
        "time": "13:20"
    },
    {
        "you": false,
        "peer_id": 3,
        "chatPartner": "Maximillian S",
        "message": "Я люблю макдональс! Он вдохновляет меня на жизнь.",
        "read": false,
        "time": "11:42",
        "unread": 2
    },
    {
        "you": true,
        "peer_id": 4,
        "chatPartner": "Аркадий ( Авито )",
        "message": "privet",
        "read": true,
        "time": "09:01"
    },
    {
        "you": false,
        "peer_id": 5,
        "chatPartner": "Ангелина Петрова",
        "message": "Здравствуйте! По чем работы?",
        "read": true,
        "time": "20.09.23"
    }
]

export const newChatPartner = createEvent<ChatPartner>();
export const $chatPartner = createStore<ChatPartner[]>(mockChatPartners)
    .on(newChatPartner, (state, message) => [...state, message]);
export const $activeChatPartner = createStore<ChatPartner | null>(null)
    .on(newChatPartner, (message) => message);

export const chatActivated = createEvent();
export const chatDeactivated = createEvent();

export const $isChatActive = createStore<boolean>(false)
    .on(chatActivated, () => true)
    .on(chatDeactivated, () => false);

// --- сообщения


const yourPeerId = 1;

const initialMessages = [
        {
            "chatid": 1,
            "messages": [
                {
                    "chatid": 1,
                    "peer_id": 2,
                    "message": "привет",
                    "timestamp": "2025-02-05 09:12:11",
                    "read": true
                },
                {
                    "chatid": 1,
                    "peer_id": 1,
                    "message": "Прив",
                    "timestamp": "2025-02-17 02:57:11",
                    "read": true
                },
                {
                    "chatid": 1,
                    "peer_id": 2,
                    "message": "почему не отвечаешь мне каждую секунду?... а ты сейчас думаешь обо мне? почему же ты не пишешь мне, когда спишь...",
                    "timestamp": "2025-02-21 02:25:11",
                    "read": true
                },
                {
                    "chatid": 1,
                    "peer_id": 2,
                    "message": "чд?",
                    "timestamp": "2025-02-25 00:33:11",
                    "read": true
                }
            ]
        },
        {
            "chatid": 2,
            "messages": [
                {
                    "chatid": 2,
                    "peer_id": 3,
                    "message": "Йоу",
                    "timestamp": "2025-02-17 06:48:11",
                    "read": false
                },
                {
                    "chatid": 2,
                    "peer_id": 1,
                    "message": "Привет!",
                    "timestamp": "2025-02-11 10:15:11",
                    "read": false
                }
            ]
        }
    ]
;

export const changeActiveChat = createEvent<number | null>();

export const $activeChat = createStore<number | null>(null)
    .on(changeActiveChat, (_, chatid) => chatid);

export const $chats = createStore(initialMessages);

export const addMessage = createEvent<{ chatid: number, peer_id: number, message: string }>();

$chats.on(addMessage, (chats, newMessage) => {
    return chats.map(chat => {
        if (chat.chatid === newMessage.chatid) {
            return {
                ...chat,
                messages: [
                    ...chat.messages,
                    {
                        ...newMessage,
                        timestamp: Date.now(),
                        read: newMessage.peer_id !== yourPeerId // Помечаем непрочитанным, если отправил другой пользователь
                    }
                ]
            };
        }
        return chat;
    });
});

export const $chatMessages = createStore([])
    .on(changeActiveChat, (_, activeChat) => {
        const chat = $chats.getState().find(c => c.chatid === activeChat);
        return chat ? chat.messages : [];
    })
    .on($chats, (state, chats) => {
        const activeChat = $activeChat.getState();
        const chat = chats.find(c => c.chatid === activeChat);
        return chat ? chat.messages : [];
    });



export const changeActiveChatPartnerName = createEvent<string | null>();

export const $activeChatPartnerName = createStore(null)
    .on(changeActiveChatPartnerName, (_, name) => name);