import styled from '@emotion/styled'

import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12;
  font-weight: 700;
  color: var(--primaryTextColor);
  transition: all 0.5s ease;
  
  &:not(:last-child){
   margin-right: 12px;
  }
  text-shadow: 2px 2px 4px #5D72F1;
  &.active {
    color: var(--secondaryTextColor);
  }
`;