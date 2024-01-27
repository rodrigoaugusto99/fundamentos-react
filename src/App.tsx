
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css';
import './global.css'



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/rodrigoaugusto99.png',
      name: 'Rodrigo Augusto',
      role: 'Flutter Developer'
    },
    content :[
      { type: 'paragraph', content: 'eai pexuaaaal',},
      { type: 'paragraph', content: 'kkkkkkk',},
      { type: 'link', content: 'jane.design/doctorcare',}
    ],
    publishedAt: new Date('2024-01-22'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maicon3000.png',
      name: 'Maicon Douglas',
      role: 'c# developer'
    },
    content :[
      { type: 'paragraph', content: 'Fala galeraaa',},
      { type: 'paragraph', content: 'Tudo beeeeem',},
      { type: 'link', content: 'jane.design/doctorcare',}
    ],
    publishedAt: new Date('2024-01-30'),
  }
]


export function App() {
  return (
    <div>
      <Header />   
       <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
            
          })}
        </main>
      </div>
    </div>
  )
}




