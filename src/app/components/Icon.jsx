const paths = {
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  building: <><path d="M4 21V7l8-4v18M12 9h8v12M8 9v.01M8 13v.01M8 17v.01M16 13v.01M16 17v.01M2 21h20" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  document: <><path d="M6 3h9l3 3v15H6zM14 3v4h4M9 12h6M9 16h6" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-7h6v7" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  phone: <path d="M6.7 3h3l1.5 4.4-2.1 1.4a15.7 15.7 0 0 0 6.1 6.1l1.4-2.1L21 14.3v3a3.7 3.7 0 0 1-3.7 3.7C9.4 20.5 3.5 14.6 3 6.7A3.7 3.7 0 0 1 6.7 3Z" />,
  shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8.1 7 10 4.2-1.9 7-5.3 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  tiktok: <><path d="M15 4v10.2a4.4 4.4 0 1 1-3.6-4.3" /><path d="M15 4c.7 2.2 2.3 3.5 4.5 3.8" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /></>,
  whatsapp: <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.2Z" /><path d="M8.2 8c.2 3.7 2.4 5.7 5.9 6.4l1.3-1.4-2.2-1-1 1c-1.5-.6-2.6-1.7-3.2-3.2l1-1L9 6.6Z" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
