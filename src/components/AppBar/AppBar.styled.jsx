import styled from '@emotion/styled'

export const Header = styled.section`
  min-width: 440px;
  background-color: #eee1e1;
  width: 80%;
  max-width: 550px;
  margin: 12px auto;
  padding: 1em;
  box-shadow:
   0 0 0 1px rgb(194, 192, 184) inset,
   0 5px 0 -4px rgb(255, 255, 255),
   0 5px 0 -3px rgb(194, 192, 184),
   0 11px 0 -8px rgb(255, 255, 255),
   0 11px 0 -7px rgb(194, 192, 184),
   0 17px 0 -12px rgb(255, 255, 255),
   0 17px 0 -11px rgb(194, 192, 184);
`
export const Box = styled.div`
 display: flex;
 justify-content: space-between;
 max-width: 540px;
 margin: 0 auto;
 border-bottom: 4px solid;
 border-image: linear-gradient(to right, #CE190B, #0B4FCE, #13A22C, #5A1EA2)
    47% 0%;
`

