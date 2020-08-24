export interface InputMessage {
  chat_id: number | undefined;
  user_id: number;
  text: string;
  created_at: string;
}

export interface Message extends InputMessage {
  id: number;
}
