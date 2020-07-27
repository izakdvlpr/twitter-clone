import styled, { css } from 'styled-components';

import colors from "@styles/colors";
import { LocationOn, Cake } from '@styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  max-height: 100%;
  overflow-y: auto;
  
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }  
`;

export const Banner = styled.div`
  flex-shrink: 0;
  
  width: 100%;
  height: min(33vw, 199px);
  
  background-color: ${colors.twitter};
  
  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  
  border: 3.75px solid ${colors.primary};
  background-color: ${colors.gray};
  border-radius: 50%;
  
  position: absolute;
  
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;
  
  display: flex;
  flex-direction: column;
  
  position: relative;
  
  > h1 {
    font-weight: bold;
    font-size: 19px;    
  }
  
  > h2 {
    font-weight: normal;
    font-size: 15px;
    
    color: ${colors.gray};
  }
  
  > p {
    font-size: 15px;
    margin-top: 11px;
    
    > a {
      text-decoration: none;
      color: ${colors.twitter};
    }
  }    
  
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;
    
    > li {
      display: flex;
      align-items: center;
      
      font-size: 15px;
      color: ${colors.gray};
      
      > svg {
        fill: ${colors.gray};
        margin-right: 5px;
      }
    }
  }
`;

const iconCss = css`
  height: 20px;
  width: 20px; 
  
  color: ${colors.gray};
`;

export const LocationIcon = styled(LocationOn)`${iconCss}`;
export const CakeIcon = styled(Cake)`${iconCss}`;

export const Followage = styled.div`
  display: flex;
  
  > span {
    font-size: 15px;
    color: ${colors.gray};
    
    & + span {
      margin-left: 20px;
    }        
  }
`;
