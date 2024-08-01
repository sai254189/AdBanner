import { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import { Box } from '@mui/material';

const initialBanners = [
  {
    title: 'Ad Banner 1',
    description: 'Description for ad banner 1',
    image: '/images/ad1.png',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 2',
    description: 'Description for ad banner 2',
    image: '/images/ad2.jpg',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 3',
    description: 'Description for ad banner 3',
    image: '/images/ad3.jpg',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 4',
    description: 'Description for ad banner 4',
    image: '/images/ad4.jpg',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 5',
    description: 'Description for ad banner 5',
    image: '/images/ad5.jpg',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 6',
    description: 'Description for ad banner 6',
    image: '/images/ad6.jpg',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 7',
    description: 'Description for ad banner 7',
    image: '/images/ad7.jpg',
    background: '/images/CISCO.jpg',
  },
  {
    title: 'Ad Banner 8',
    description: 'Description for ad banner 8',
    image: '/images/ad8.jpg',
    background: '/images/CISCO.jpg',
  }
];

const availableImages = [
  '/images/ad1.png',
  '/images/ad2.jpg',
  '/images/ad3.jpg',
  '/images/ad4.jpg',
  '/images/ad5.jpg',
  '/images/ad6.jpg',
  '/images/ad7.jpg',
  '/images/ad8.jpg'
  // Add more image URLs here
];

export default function Home() {
  const [banners, setBanners] = useState(initialBanners);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setEditIndex(index);
  };

  const handleSave = (data: any) => {
    const updatedBanners = [...banners];
    if (editIndex !== null) {
      updatedBanners[editIndex] = data;
      setBanners(updatedBanners);
    }
  };

  return (
    <div
      style={{
        background: `url('/images/bg.jpg') no-repeat center center`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        padding: '16px',
        position: 'relative', // Ensure the content is positioned relative to the background
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {banners.map((banner, index) => (
          <BannerImageComp
            key={index}
            title={banner.title}
            description={banner.description}
            image={banner.image}
            background={banner.background}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </Box>
      {editIndex !== null && (
        <EditBannerTemplateBs
          open={editIndex !== null}
          onClose={() => setEditIndex(null)}
          onSave={handleSave}
          initialData={banners[editIndex]}
          availableImages={availableImages}
        />
      )}
    </div>
  );
}
