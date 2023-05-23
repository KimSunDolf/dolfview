export const projects: Project[] = [
  {
    title: '飞鸟集网络',
    description: '跨越世界，力求稳定。',
    preview: 'https://pan.createvoyage.com/f/Njsj/cover-page.png',
    website: 'https://www.offshoreview.xyz/',
    source: 'https://github.com/GeekQuerxy/SSPanel-Malio',
    tags: ['design', 'favorite'],
    type: 'web',
  },
  {
    title: '飞鸟 Chat',
    description: ' 回答你的一切问题。',
    preview: 'https://pan.createvoyage.com/f/Ootv/chat-cover.png',
    website: 'https://ai.offshoreview.xyz/',
    source: 'https://github.com/Yidadaa/ChatGPT-Next-Web',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },  
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type ProjectType = 'personal' | 'web' | 'app' | 'Curriculum Design'| 'toy' | 'other' 

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)
