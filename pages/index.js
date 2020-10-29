import React from "react";
import style from '../styles/Home.module.css';
export default function Home() {
    const [list] = React.useState([1,2,3,4,5,6,7,8,9,0,11,22,12,13,14,15,16,17,111,1111,11111,111111,1111111,222,2222,22222,333,3333,33333])
  return (
    <div>
        {list.map(item => <p key={item} className={style.text}>test infinite</p>)}
    </div>
  )
}
