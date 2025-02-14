import style from './Header.module.css'

function Header(){
    return(
        <header className={style.container}>
            <div className={style.container_div1}>
                <button onClick={() =>{window.scrollTo(0, 0)}}>Home</button>
                <button onClick={() =>{window.scrollTo(0, 50)}}>Sobre Nós</button>
                <button onClick={() =>{window.scrollTo(0, 530)}}>Nossa História</button>
                <button onClick={() =>{window.scrollTo(0, 1300)}}>Planos</button>
                <button onClick={() =>{window.scrollTo(0, 1900)}}>Nosso Clientes</button>
            </div>
            <div className={style.container_div2}>
                <img src='./assets/perfil.jpg' alt='perfil'/>
            </div>
        </header>
    )
}

export default Header