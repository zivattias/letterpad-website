import { useEffect } from 'react';

export default function Demo() {
  useEffect(() => {
    document.location.href = 'https://letterpad.app/admin/login?demo';
  }, []);

  return null;
}
