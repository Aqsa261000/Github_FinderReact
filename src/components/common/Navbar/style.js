const style = {
  spaceBetween: { display: 'flex', justifyContent: 'space-between' },
  flexStart: {
    display: 'flex',
    listStyle: 'none',
    '& a': {
      textDecoration: 'none',
      color: 'white',
    },
    '& li': {
      padding: '8px 12px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in',

      '& a:hover': { color: 'black' },
    },
  },
  icon: {
    fontSize: '30px',
    margin: '0 10px',
  },
};
export default style;
