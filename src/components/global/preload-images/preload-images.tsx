import React from 'react';
import { PreloadImagesWrapper } from './styles';

 type Props = {
   images?: string[]
   basePath: string
   handleLoad: any
 }

export default ({ images, basePath, handleLoad }: Props) => {
  const loadImages = () => {
    return images.map((f: string, i: number) => (
      <img src={basePath + f} onLoad={() => handleLoad()} key={f + i} />
    ));
  }

  return (
    <PreloadImagesWrapper>
      { images && loadImages() }
    </PreloadImagesWrapper>
  );
}
