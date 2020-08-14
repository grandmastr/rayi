import styled from 'styled-components'

export default styled.button`
  ${props => `
    padding: 12px 28px;
    background: ${props.primary ? props.theme.primary : 'transparent'};
    border: 2.2px solid;
    border-color: ${!!props.stroke ? props.stroke : props.theme.primary};
    border-radius: 4px;
    color: ${
      !!props.color || !!props.stroke
        ? props.color || props.stroke
        : props.theme.primary
    };
    font-weight: bold;
    text-transform: capitalize;
    transition: 200ms ease-in-out background-color;
    &:hover{
       background-color: ${
         props.stroke === '#fff' ? props.theme.primary : props.theme.secondary
       };
       border-color: ${
         props.stroke === '#fff' ? props.theme.primary : props.theme.secondary
       };
    }
  `}
`
