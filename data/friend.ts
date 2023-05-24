export const Friends: Friend[] = [
  {
    title: 'OpenAI',
    description: '智能先驱缔造者。',
    website: 'https://chat.openai.com/',
    avatar: 'https://pan.createvoyage.com/f/QRCo/chatgpt-logo.png',
  },
  //请按照以上格式提交请求，avatar 可以是超链接。
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
