import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

const Pn = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled(Left)`
  margin-left: auto;
`;

const Label = styled.p`
  font-size: 20px;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  fill: var(--color-text);
`;

/*
    props
    next - bool - show previous
    previous - bool - show next
    l1 - string - previous label
    l2 - string - next label
*/
export default function Previousnext(props) {
  const previous = (
    <Left onClick={() => navigate(`/learn/${props.l1.toLowerCase()}`)}>
      <Arrow>
        <LeftArrow />
      </Arrow>
      <Label>{props.l1}</Label>
    </Left>
  );

  const next = (
    <Right onClick={() => navigate(`/learn/${props.l2.toLowerCase()}`)}>
      <Label>{props.l2}</Label>
      <Arrow>
        <RightArrow />
      </Arrow>
    </Right>
  );

  return (
    <Pn>
      {props.previous ? previous : null}
      {props.next ? next : null}
    </Pn>
  );
}

function LeftArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z"
      ></path>
    </svg>
  );
}

function RightArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
      ></path>
    </svg>
  );
}
