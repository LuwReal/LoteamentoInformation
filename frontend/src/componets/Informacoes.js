import { useEffect, useState } from 'react'
import style from './Informacoes.module.css'




function Informacoes(){





    return(
        <main className={style.container}>
            <div className={style.conteudo}>
                <img className={style.imagem} src='./assets/loteamento.jpg' alt="Lotemento"/>
                <div>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    <img className={style.imagemFloat} src='./assets/loteamento.jpg' alt="Lotemento"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    </p>
                </div>
            </div>
            <div className={style.conteudo + ' ' + style.contaundoMeio}>
                <div>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    <img className={style.imagemFloatRight} src='./assets/loteamento.jpg' alt="Lotemento"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?</p>
                </div>
                <img className={style.imagem} src='./assets/loteamento01.jpg' alt="Lotemento"/>
            </div>
            <div className={style.conteudo}>
                <img className={style.imagem} src='./assets/loteamento02.jpg' alt="Lotemento"/>
                <div>
                    <h1>Lorem ipsum dolor</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    <img className={style.imagemFloat} src='./assets/loteamento.jpg' alt="Lotemento"/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?</p>
                </div>
            </div>
        </main>
    )
}

export default Informacoes