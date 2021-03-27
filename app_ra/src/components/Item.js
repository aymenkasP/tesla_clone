import Button from "./Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './item.css'
import Fade from 'react-reveal/Fade';



export default function Item({ title, id, description, descLinks, backgroundImg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink ,towButton , first , center }) {

    

    return (
        <div id={id}  className='item' style={{
            backgroundImage : `url(${backgroundImg})`

        }} >
               
             

            <div className='item_container' >

            
                 <Fade  duration={900}>
                <div className='item_text' >
                
                   
                  
                      <p> {title} </p>  
                   
                    <dev className='item_description' >
                        <p>{description}</p>
                    </dev>
                  
                </div>
                        
              
               

                <div className="item_b" >
                    <div className={`item-btn ${center? 'centerBtn' : ''} `} >
                        <Button imp ='primary' text={leftBtnText} link={leftBtnLink} />
                        {
                            towButton && (
                                <Button imp ='secondary' text={rightBtnText} link={rightBtnLink}   />
                            )
                        }
                    </div>
                    {
                        first && (
                            <div className ='item_expand'>
                               <ExpandMoreIcon />
                            </div>
                        )
                    }
                </div>

                </Fade>
              

            </div>

            
           
        </div>

        
    )

};
