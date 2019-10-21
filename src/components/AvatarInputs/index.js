import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField, error } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState([defaultValue && defaultValue.id]);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar',
        ref: ref.current,
        // path: 'dataset.file',
        path: '',
      });
    }
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    const avatarPreview = URL.createObjectURL(e.target.files[0]);

    data.append('avatar', avatarPreview);

    setPreview(avatarPreview);
    setFile(data);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            `https://cdn.icon-icons.com/icons2/851/PNG/512/psyduck_icon-icons.com_67509.png`
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
      </label>
      {error ? <span>{error}</span> : ''}
    </Container>
  );
}
