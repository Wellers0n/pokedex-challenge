import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import bag from '../../assets/bag.svg';

export default function AvatarInput() {
  const { defaultValue, registerField, error } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  localStorage.getItem('files');

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar',
        ref: ref.current,
        path:
          'https://cdn.icon-icons.com/icons2/851/PNG/512/psyduck_icon-icons.com_67509.png',
      });
    }
  }, [ref.current]);

  async function handleChange(e) {
    const formData = new FormData();

    const avatarPreview = URL.createObjectURL(e.target.files[0]);
    localStorage.setItem('files', avatarPreview);

    formData.append('avatar', avatarPreview);

    // const reader = new FileReader();
    // reader.readAsDataURL(formData[1]);

    setPreview(avatarPreview);
    setFile(avatarPreview);
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
