import Block from "./gallery/block";
import '../css/Gallery.css';


export default function Gallery() {
    return (
        <div className="Gallery">
            <Block imgSrc="/path/to/image1.jpg" />
            <Block imgSrc="/path/to/image2.jpg" />
            <Block imgSrc="/path/to/image3.jpg" />
            <Block imgSrc="/path/to/image4.jpg" />
            <Block imgSrc="/path/to/image5.jpg" />
            <Block imgSrc="/path/to/image6.jpg" />
        </div>
    );
}