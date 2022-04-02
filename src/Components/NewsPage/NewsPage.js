import React from 'react';
import { projectData } from '../../projectData'
import './NewsPage.css';

class NewsPage extends React.Component {
    render() {
        const params = this.props.match.params;
        return (
            <div className='article_content'>
                <p className='article_title'>{projectData[params.index].title}</p>
                <img className='article_img' src={projectData[params.index].imageUrl} alt="article_image" />
                <p className='article_description'>{projectData[params.index].description}</p>
                <p className='article_expertComment' >{projectData[params.index].expertComment}</p> 
            </div>
        )
    }
}

export default NewsPage;