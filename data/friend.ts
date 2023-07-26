export const Friends: Friend[] = [
  {
    title: 'OpenAI',
    description: '智能先驱缔造者。',
    website: 'https://chat.openai.com/',
    avatar: '![](https://one.offshoreview.xyz/docu-work/b7396cb7a8899d46bf13c1ef69a9000b.png)',
  },
  //请按照以上格式提交请求，avatar 可以是超链接。
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
