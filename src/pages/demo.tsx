import { useEffect } from "react";

export default function Demo() {
  useEffect(() => {
    document.location.href = "https://letterpad.app/admin/login?demo";
  }, []);

  return (
    <div className='bg-slate-200 container text-slate-700 flex flex-col px-4 py-36 text-center'>
      <h4>Loading Demo...</h4>
    </div>
  );
}
