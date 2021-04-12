import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import styles from '@/styles/Home.module.css';

export default function TestPage(){
    const { query } = useRouter();
    const { id } = query;
    useEffect(() => {
        console.log(id, query)
    }, [id]);
    return (
      <form noValidate autoComplete="off" className={styles.form}>
          <TextField id="standard-basic" label="用户名" className={styles.formItem}/>
          <TextField id="filled-basic" label="联系地址" variant="filled" className={styles.formItem}/>
          <TextField id="outlined-basic" label="手机号码" variant="outlined" className={styles.formItem}/>
      </form>
    );
}
