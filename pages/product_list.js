import React from 'react';
import Head from 'next/head';
function product_list(props) {
    return (
        <>
            <Head>
                <title>Product</title>
                <meta property="og:title" content="My page" key="title" />
            </Head>
            <div>
                <h1>Product</h1>
            </div>
        </>
    );
}

export default product_list;