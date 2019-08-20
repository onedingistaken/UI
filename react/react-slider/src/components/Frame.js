import React from 'react'
import '../App.css'
import image_01 from '../images/image_01.jpg'

class Frame extends React.Component {
    render() {
        // const image_01 = process.env.PUBLIC_URL + '/images/image_01.jpg'
        return (
            <div className='Frame'>
                <img className='image' src={image_01} alt='image_01' width='200px' />
                <button type='button' className='btn_left' onClick={this.props.prevImage}>&#9664;</button>
                <button type='button' className='btn_right' onClick={this.props.nextImage}>&#9654;</button>
            </div>
        )
    }
}

export default Frame 