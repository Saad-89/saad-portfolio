import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

const ICONS = {
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
      <path d="M12 8v5M12 17h.01" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
};

const Toast = ({ message, type = 'success', duration = 5000, onClose }) => {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleClose = useCallback(() => {
    setLeaving(true);
    setTimeout(() => onClose?.(), 280);
  }, [onClose]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    const timer = setTimeout(handleClose, duration);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [duration, handleClose]);

  return createPortal(
    <div className={styles.viewport} aria-live="polite" role="status">
      <div
        className={`${styles.toast} ${styles[type] || ''} ${entered ? styles.in : ''} ${leaving ? styles.out : ''}`}
      >
        <span className={styles.icon}>{ICONS[type] || ICONS.success}</span>
        <p className={styles.message}>{message}</p>
        <button className={styles.close} onClick={handleClose} aria-label="Dismiss notification">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Toast;
