import React ,{Component} from 'react';

class Gallery extends Component{
    render(){
        let noImage='https://media-dirtboundoffroad.netdna-ssl.com/pub/media/catalog/product/placeholder/default/no_image_available_3.jpg';
        return(
            <div>{
                    this.props.items.map((item,index)=>{
                        let { title,imageLinks,infoLink }= item.volumeInfo;

            return (
                <a 
                href={infoLink}
                target="_blank"
                key={index} className="book">
                <img
                className="book-img"
                src={imageLinks !==undefined ?imageLinks.thumbnail:noImage}
                alt="book image"/>
                <div className="book-text">{title}</div>
                </a>
            )
                    })
            }
                
            </div>
        )
    }
}
export default Gallery;