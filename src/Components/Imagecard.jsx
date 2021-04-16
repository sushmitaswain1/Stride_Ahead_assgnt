import React from 'react';
import { Grid } from './Grid';
import styled from "styled-components";
import "./Styles.css";
import "./Card-styles.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const MenuStyled = styled.div`
border: 1px solid green; 
height: 1000px;
margin: 0px 400px 50px 20px;
`;
 
const Imagecard = ({results}) => {
    const filteredImages = results.map((el) => {
       return (
          
           <div class="card-container">
              <img alt = {1} src = {`https://avatars.dicebear.com/api/human/${el.Name}.svg`} />
           </div>

            
          
       );

 });
    return <div>{filteredImages}</div>;

    

}

export default Imagecard;


