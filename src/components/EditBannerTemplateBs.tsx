import React, { useState } from 'react';
import { Box, Button, TextField, Modal, Grid, Typography } from '@mui/material';

interface EditBannerProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData: any;
  availableImages: string[];
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ open, onClose, onSave, initialData, availableImages }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageSelect = (image: string) => {
    setFormData({
      ...formData,
      image,
    });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          margin: 'auto',
          top: '10%',
          left: '10%',
          position: 'absolute',
          width: '80%',
          maxHeight: '80%',
          overflowY: 'auto',
          boxShadow: 24,
          outline: 'none',
        }}
      >
        <Typography variant="h6" mb={2}>Edit Banner</Typography>
        <TextField
          name="title"
          label="Title"
          fullWidth
          value={formData.title}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          name="description"
          label="Description"
          fullWidth
          value={formData.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Typography variant="body1" mb={2}>Select Image</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                background: `url(${formData.image}) no-repeat center center`,
                backgroundSize: 'cover',
                height: '200px',
                borderRadius: 2,
                mb: 2,
              }}
            />
          </Grid>
          {availableImages.map((image, index) => (
            <Grid item xs={3} key={index}>
              <Box
                sx={{
                  background: `url(${image}) no-repeat center center`,
                  backgroundSize: 'cover',
                  height: '100px',
                  borderRadius: 2,
                  cursor: 'pointer',
                  border: formData.image === image ? '2px solid blue' : 'none',
                }}
                onClick={() => handleImageSelect(image)}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditBannerTemplateBs;
