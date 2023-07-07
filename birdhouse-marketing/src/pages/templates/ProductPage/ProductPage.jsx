import React, { useEffect, useState } from 'react';

const html_template = ""

const ProductPage = () => {
    return <div dangerouslySetInnerHTML={{ __html: html_template }} />;
};

export default ProductPage;