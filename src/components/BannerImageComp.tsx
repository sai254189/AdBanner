import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface AdBannerProps {
  title: string;
  description: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<AdBannerProps> = ({ title, description, image, background, onEdit }) => {
  return (
    <Box
      sx={{
        background: `url(${background}) no-repeat center center`,
        backgroundSize: 'cover',
        padding: 2,
        margin: 2,
        borderRadius: 2,
        position: 'relative',
        width: '45%',
        display: 'inline-block'
      }}
    >
      <Box
        sx={{
          background: `url(${image}) no-repeat center center`,
          backgroundSize: 'cover',
          height: '200px',
          borderRadius: 2,
        }}
      />
      <Typography variant="h5" mt={2}>{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <IconButton onClick={onEdit} sx={{ position: 'absolute', top: 8, right: 8 }}>
        <EditIcon />
      </IconButton>
    </Box>
  );
};

export default BannerImageComp;
