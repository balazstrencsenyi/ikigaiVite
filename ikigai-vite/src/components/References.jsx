import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ReferenceBar from './referenceBar'; // Assuming your component is named ReferenceBar

export default function TitlebarBelowImageList() {
  return (
    <div>
      <ReferenceBar />
      <ImageList sx={{ width: 500, height: 450 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span> {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}


const itemData = [
  {
    img: './src/assets/wishversum.png',
    title: 'www.wishversum.com',
  },
  {
    img: './src/assets/syntric.png',
    title: 'www.syntric.ai',
   
  },
  {
    img: './src/assets/apple.png',
    title: 'https://store-vercel-2.vercel.app/',

  },
  {
    img: './src/assets/szentesi.png',
    title: 'szentesivadvedelem.hu',

  },
  {
    img: './src/assets/res.png',
    title: 'not deployed yet',

  },
  {
    img: './src/assets/weather.png',
    title: 'not deployed yet',

  },
  {
    img: './src/assets/makeawish.png',
    title: 'not deployed yet',
    
  },
  
];
