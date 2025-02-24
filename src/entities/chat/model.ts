import { createStore, createEvent } from 'effector';
import {ChatPartner} from './types';

const mockChatPartners: ChatPartner[] = [
    {
        "you": false,
        "peer_id": 1,
        "chatPartner": "Екатерина Желудь",
        "message": "чд?", "read": false, "time": "17:02", "unread": 2},
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
        "read": true,
        "time": "11:42"
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

export const chatActivated = createEvent();
export const chatDeactivated = createEvent();
export const activeChatIdChanged = createEvent<number | null>();

export const $isChatActive = createStore<boolean>(false)
    .on(chatActivated, () => true)
    .on(chatDeactivated, () => false);

export const $activeChatId = createStore<number | null>(null)
    .on(activeChatIdChanged, (_, chatId) => chatId);
