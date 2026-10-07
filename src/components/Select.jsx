'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// Styled replacement for <select>: the native popup can't be themed and picks up the OS accent colour.
export default function Select({ id, label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(Math.max(0, options.indexOf(value)));
  const root = useRef(null);
  const listId = useId();
  const labelId = `${id}-label`;

  useEffect(() => {
    if (!open) return;
    const close = (e) => {
      if (!root.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);

  const show = () => {
    setActive(Math.max(0, options.indexOf(value)));
    setOpen(true);
  };

  const pick = (i) => {
    onChange(options[i]);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    const last = options.length - 1;
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        show();
      }
      return;
    }
    const moves = { ArrowDown: Math.min(active + 1, last), ArrowUp: Math.max(active - 1, 0), Home: 0, End: last };
    if (e.key in moves) {
      e.preventDefault();
      setActive(moves[e.key]);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      pick(active);
    } else if (e.key === 'Escape' || e.key === 'Tab') {
      setOpen(false);
    }
  };

  return (
    <div className="field" ref={root}>
      <label id={labelId} htmlFor={id}>
        {label}
      </label>
      <div className={`select ${open ? 'open' : ''}`}>
        <button
          id={id}
          type="button"
          className="select-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={`${labelId} ${id}`}
          aria-activedescendant={open ? `${listId}-${active}` : undefined}
          onClick={() => (open ? setOpen(false) : show())}
          onKeyDown={onKeyDown}
        >
          <span>{value}</span>
          <ChevronDown size={16} className="select-chevron" />
        </button>
        {open && (
          <ul className="select-menu" role="listbox" id={listId} aria-labelledby={labelId}>
            {options.map((opt, i) => (
              <li
                key={opt}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={opt === value}
                className={i === active ? 'active' : undefined}
                onPointerEnter={() => setActive(i)}
                onClick={() => pick(i)}
              >
                <span>{opt}</span>
                {opt === value && <Check size={15} />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
