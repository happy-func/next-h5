import React from "react";
import style from '../styles/Home.module.css';
import BaseLink from "@/components/BaseLink";

function Home({ list }) {
    return (
        <div className={style.page}>
            <BaseLink src="/test?id=2">test</BaseLink>
            {list.map(item => <p key={item} className={style.text}>test {item}</p>)}
        </div>
    )
}

export const getStaticProps = function () {
    return {
        props: {
            pageTitle: 'Next-H5',
            list: Array.from({length:100}, (v,k) => k),
        }
    }
}

export default Home;
