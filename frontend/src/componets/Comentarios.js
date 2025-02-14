import style from './Comentarios.module.css'


function Comentarios(){

    let comentarios = [
        {imagem: './assets/pessoa01.jpg', usuario: 'Lucas', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
        {imagem: './assets/pessoa02.jpg', usuario: 'Jose', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
        {imagem: './assets/pessoa03.jpg', usuario: 'Carlos', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
        {imagem: './assets/pessoa04.jpg', usuario: 'Bruno', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
        {imagem: './assets/pessoa05.jpg', usuario: 'Gil', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
        {imagem: './assets/pessoa06.jpg', usuario: 'Carollane', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
        {imagem: './assets/pessoa07.jpg', usuario: 'Roberto', opniao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?'},
    ]

    let valueBackground = ['top', 'bottom', 'left', 'right', 'center']




    return(
        <section className={style.container}>
            <div className={style.scroll}>
                {comentarios.map((comentarios, index) =>(
                 <div className={style.conteudo} key={index} style={{backgroundPosition: valueBackground[Math.floor(Math.random() * valueBackground.length)]}}>
                 <img src={comentarios.imagem} alt='Pessoa'/>
                 <div>
                     <h3>{comentarios.usuario}</h3>
                     <p>{comentarios.opniao}</p>
                 </div>
                </div>
            ))}
            </div>
            
        </section>
    )
}
export default Comentarios