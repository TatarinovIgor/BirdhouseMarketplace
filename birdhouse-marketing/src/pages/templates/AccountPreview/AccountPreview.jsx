import React, { useEffect, useState } from 'react';

const html_template = ""
const AccountPreview = () => {
    return <div dangerouslySetInnerHTML={{ __html: html_template }} />;
};

export default AccountPreview;