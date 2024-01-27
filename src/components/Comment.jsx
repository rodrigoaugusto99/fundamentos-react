import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        
        onDeleteComment(content)
    }

    function handleLikeComment(){ 
        setLikeCount((state) => {
            return state + 1
        })
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/rodrigoaugusto99.png'/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Rodrigo Augusto</strong>
                            <time title='11 de maio as 08:13h' dateTime='2023-01-01 08:13:34'>Cerca de 1h atras</time>
                        </div>
                        <button 
                            onClick={handleDeleteComment} 
                            title='Deletar comentario'>
                                <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}