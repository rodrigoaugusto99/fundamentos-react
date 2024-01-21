import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'

export function Post() {
    return (
      <article className={styles.post}>
        
        <header>
          <div className={styles.author}>
          <Avatar src='https://github.com/maicon3000.png'/>
            <div className={styles.authorInfo}>
              <strong>Rodrigo Augusto</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title='20 de janeiro de 2023 as 20:12' dateTime='2023-01-20'>Publicado ha 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala Galeraa</p>
          <p>acabei de subir mais um projeto no meu portfia</p>
          <p><a href="">tome tome tomiii</a> </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea 
            placeholder='Deixe um comentario'
          />
          <footer><button type='submit'>Publicar</button></footer>
          
        </form>
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
      
    )
  }