import { useEffect, useState } from 'react'
import style from './Sobre.module.css'

function Sobre(){

    let [valueWidth, setValueWidth] = useState('0%')

    useEffect(() =>{
        if(valueWidth === '0%'){
            setValueWidth('33%')
        }
    },[valueWidth])


    const StyleDiv1 = {
        width: valueWidth,
    }



    return(
        <section className={style.container}>
            <div className={style.container_div1} style={StyleDiv1}>
            <img src="/assets/paisagem.jpg" alt="Paisagem" />
            </div>
            <div className={style.container_div2}>
                <h2>Sobre Nós</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum.
                    Nam, cum minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci blanditiis 
                    voluptates eum. Nam, cum minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci
                    blanditiis voluptates eum. Nam, cum minima?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel 
                    adipisci blanditiis voluptates eum. Nam, cum minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo 
                    unde vel adipisci blanditiis voluptates eum. Nam, cum minima? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ipsam ea quo unde vel adipisci blanditiis voluptates eum. Nam, cum minima?</p>
                <ul>
                    <li>SET</li>
                    <li>DR</li>
                    <li>CCS</li>
                    <li>LTM</li>
                </ul>
            </div>
        </section>
    )
}
export default Sobre