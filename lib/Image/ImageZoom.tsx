'use client';

import { type ImgHTMLAttributes } from 'react';
import Zoom, { type UncontrolledProps } from 'react-medium-image-zoom';

import './ImageZoom.scss';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

type ImageZoomProps = {
  zoomInProps?: UncontrolledProps;
  children?: React.ReactNode;
  rmiz?: UncontrolledProps;
  src: string;
} & ImageProps;

export function ImageZoom({
  zoomInProps,
  children,
  rmiz,
  src,
  ...props
}: ImageZoomProps): React.ReactElement {
  return (
    <Zoom
      zoomMargin={20}
      wrapElement="span"
      {...rmiz}
      zoomImg={{
        src: src,
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      {children ?? (
        <img
          {...props}
          src={src}
        />
      )}
    </Zoom>
  );
}
