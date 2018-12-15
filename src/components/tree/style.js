import styled from 'styled-components';

export const ParentWrapper = styled.div`
  width: 100%;
  height: auto;
`
export const Parent = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: ${props => props.bg}
  :hover{
    cursor: pointer;
    background: #eff6f9;
  }
`
export const PText = styled.span`
  margin-right: 100px;
`
export const ChildWrapper = styled.div`
  width: 100%;
  
`
export const Child = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 60px;
  line-height: 40px;
  box-sizing: border-box;
  background: ${props => props.bg}
  :hover{
    cursor: pointer;
    background: #eff6f9;
  }
`
export const CText = styled.span`

`
