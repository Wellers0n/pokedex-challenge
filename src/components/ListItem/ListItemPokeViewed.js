import React from 'react';

import { Wrapper } from './styles';



export default function ListItemPokeViewed(props) {

  return (
    <>
      <Wrapper>
        {props.pokes.length ? props.pokes.map((poke, index) => (
          <li key={index}>
            <small>#{index}</small>
            <div style={{paddingTop: '5px'}}>
              <strong>{poke}</strong>
            </div>
          </li>
        )) : <div>Nenhum pokemon visto</div>
      }
      </Wrapper>
    </>
  );
}
