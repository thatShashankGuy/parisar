
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import './BlogIndex.css'
import React from 'react';
import success from '../../assets/support.svg'
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IndexProps = {
    items: any[];
}


const BlogIndex: React.FC<IndexProps> = ({ items }) => {
    return (

        <div className='blog-Index-container'>
            <div className='dec-header'>
                <h1>Check back soon for More interesting blogs!<FontAwesomeIcon icon={faMeteor} />   </h1>
                    <div className='success'>
                        <img src={success} alt={"Image not Found"} />
                    </div>
                </div>


                <br />
                <List>
                    {items.map((item, index) => (
                        <h2>
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faMeteor} />
                                </ListItemIcon>
                                <a href={item.address} target="_blank" rel="noopener noreferrer" >
                                <ListItemText primary={
                                    <Typography
                                    sx={{ display: 'inline', textDecoration:'underline'}}
                                    component="h2"
                                    variant="h3"
                                    color="text.primary"
                                    >
                                        {item.name}
                                    </Typography>
                                   
                                    }  />
                                </a>
                            </ListItem>
                        </h2>
                    ))}
                </List>
            </div>

    );

}

export default BlogIndex