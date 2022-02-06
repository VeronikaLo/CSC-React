import image1 from '../assets/work.jpg';
import image2 from '../assets/urlaub.jpg';
import image3 from '../assets/sunday.jpg';

function Pictures(){
    return(
        <div className='pictures'>
        <img src={image1} alt="work" width="150px" />
        <img src={image2} alt="urlaub" width="150px" />
        <img src={image3} alt="sunday" width="150px" />
    </div>
    )
    
}

export default Pictures;