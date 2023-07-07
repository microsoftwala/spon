import { Typography } from '@mui/material';
import React from 'react';

const DownloadButton = ({ url, filename,name }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Typography sx={{fontSize:"28px",ml:"26px",fontWeight:"400",mt:"2%",cursor:"pointer", }} onClick={handleDownload}>
      {name}
    </Typography>
  );
};

export default DownloadButton;
