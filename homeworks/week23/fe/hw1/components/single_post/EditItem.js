import React from 'react';

export default function EditItem({ className, value, onChange }) {
  return (
    <div className={className}>
      <textarea value={value} onChange={onChange} />
    </div>
  );
}
