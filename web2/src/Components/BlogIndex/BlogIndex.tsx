
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import './BlogIndex.css'
import React from 'react';
import success from '../../assets/support.svg'
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IndexProps =  {
    items: string[];
}


const BlogIndex: React.FC<IndexProps> = ({ items }) => {
    return (
   
        <div className='blog-Index-container'>
               <div className='dec-header'>
               <h1>Check back soon for interesting blogs!   </h1> 
                <div className='success'>
        <img src={success} alt={"Image not Found"} />
        </div>
               </div>
              
                
                <br/> 
        <List>
        {/* <ListItem key={0}>
                    <ListItemIcon>
                        <AlignVerticalTopIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Click on links to read the blog"}
                    primaryTypographyProps={{ className: 'primary-text' }}
                    />
                </ListItem> */}
            {items.map((item, index) => (
                <h2>
                <ListItem key={index + 1 }>
                    <ListItemIcon>
                    <FontAwesomeIcon icon={faBook} />
                    </ListItemIcon>
                    <ListItemText primary={item} className='list-text' />
                </ListItem>
                </h2>
            ))}
        </List>
        </div>
    
    );

}

export default BlogIndex