
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import './BlogIndex.css'
import React from 'react';
import EditNoteSharpIcon from '@mui/icons-material/EditNoteSharp';
interface IndexProps {
    items: string[];
}


const BlogIndex: React.FC<IndexProps> = ({ items }) => {
    return (
   
        <div className='blog-Index-container'>
                <h1>Read Some Blogs!     </h1> <br/> 
        <List>
        <ListItem key={0}>
                    <ListItemIcon>
                        <AlignVerticalTopIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Click on links to read the blog"}
                    primaryTypographyProps={{ className: 'primary-text' }}
                    />
                </ListItem>
            {items.map((item, index) => (
                <ListItem key={index + 1 }>
                    <ListItemIcon>
                        <EditNoteSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                </ListItem>
            ))}
        </List>
        </div>
    
    );

}

export default BlogIndex