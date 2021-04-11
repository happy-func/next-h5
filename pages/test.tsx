import React, { useEffect } from "react";
import { useRouter } from 'next/router';

export default function TestPage(){
    const { query } = useRouter();
    const { id } = query;
    useEffect(() => {
        console.log(id, query)
    }, [id]);
    return <div>
        test
    </div>
}
