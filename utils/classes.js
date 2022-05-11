const classes = {
  logo: {
    a: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  appbar: {
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerNavbar: {
    ul: {
      li: {
        float: 'left',
        marginLeft: '15px',
        a: {
          color: 'primary.light',
        },
      },
    },
  },
  headerSearch: {
    width: '600px',
    position: 'relative',
    svg: {
      position: 'absolute',
      right: 0,
      fontSize: '25px',
      top: 0,
      transform: 'translate(-15px, 15px)',
      color: 'rgb(208 111 12)',
    },
    input: {
      width: '100%',
      borderRadius: '50px',
      overflow: 'hidden',
      height: '50px',
      padding: '15px',
      border: '1px solid',
      borderColor: 'secondary.dark',
      transition: '0.3s',
      '&:hover': {
        borderColor: 'secondary.light',
      },
      '&:focus': {
        outline: 'none',
        borderColor: 'secondary.light',
      },
    },
  },
  // Footer
  footer: {
    backgroundColor: 'primary.light',
    padding: '30px 0',
  },
};

export default classes;
