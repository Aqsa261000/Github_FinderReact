import React from 'react';
import Layout from '../../ui/Layout';
import { Box, Typography } from '@mui/material';
import style from './style';

const AboutDefault = () => {
  return (
    <Layout>
      <Box component="div">
        <Typography variant="h5" sx={style.mainheading}>
          About Us
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla
          illo soluta accusantium, totam sequi delectus et, magni alias cum enim
          sed laboriosam harum. Mollitia eum, libero ipsam eaque dolorem
          architecto, reprehenderit et tempora doloremque atque in optio magnam
          impedit temporibus ex, tempore voluptatem recusandae! Tenetur
          assumenda ad sunt rerum molestiae deserunt ea eveniet veniam omnis
          soluta dolor voluptas sit, expedita minus ullam deleniti aperiam
          facilis quasi suscipit recusandae provident nisi id? Aut ratione
          tenetur sequi delectus, repellat debitis provident tempore eveniet
          temporibus fugiat molestias illo nisi in accusamus alias ex nostrum
          qui minima dignissimos esse, doloremque tempora quos! Quod eaque
          sapiente odio unde placeat omnis aliquam? Ipsum blanditiis id suscipit
          dignissimos possimus quam voluptatem esse eos harum quia officia eum,
          nostrum magnam ipsam obcaecati rem dolorum beatae, architecto quasi
          quos explicabo amet. Perferendis fuga amet tenetur, qui recusandae
          eaque odit ex autem nisi esse? Quis a nisi libero porro quos,
          exercitationem nesciunt unde necessitatibus aspernatur totam atque
          vero ea at quod incidunt ipsam ut sapiente modi aut sed voluptate ex
          soluta provident! At maxime accusantium vero facilis culpa error illo
          amet cumque aspernatur velit. Doloribus ducimus nam, ut aperiam
          repudiandae sunt aut blanditiis mollitia, modi natus obcaecati
          laudantium optio?
        </Typography>
      </Box>
    </Layout>
  );
};

export default AboutDefault;
