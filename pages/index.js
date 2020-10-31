import React from "react";
import style from '../styles/Home.module.css';

function Home({ list }) {
    return (
        <div>
            {list.map(item => <p key={item} className={style.text}>test {item}</p>)}
        </div>
    )
}
Home.getInitialProps = function () {
    return {
        pageTitle: 'Next-H5',
        list: Array.from({length:100}, (v,k) => k),
    }
}
export default Home;
