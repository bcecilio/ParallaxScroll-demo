import { Parallax } from 'react-parallax';

const ImageOne = () => (
    <Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={800}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);