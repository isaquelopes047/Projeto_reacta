import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function background_black(){
    document.body.style.background="linear-gradient(-45deg, #dbdbdb, #808080, #444849, #121516)";
    document.body.style.backgroundSize=" 400% 400%";
    document.body.style.animation = "gradient 15s ease infinite;"
    
    //ALERT
    var interval = setInterval(doStuff, 1);
        function doStuff() {
        document.querySelector(".alert-success").style.display = "block";
    clearInterval(interval);
    }
    var intervall = setInterval(doStufff, 3000);
        function doStufff() {
        document.querySelector(".alert-success").style.display = "none";
    clearInterval(intervall);
    }
}

function background_gradient(){
    document.body.style.background="linear-gradient(-45deg, #ee7752, #448597, #0d4f69, #002530)";
    document.body.style.backgroundSize=" 400% 400%";
    document.body.style.animation = "gradient 15s ease infinite;"

    //ALERT
    var interval = setInterval(doStuff, 1);
        function doStuff() {
        document.querySelector(".alert-success").style.display = "block";
    clearInterval(interval);
    }
    var intervall = setInterval(doStufff, 3000);
        function doStufff() {
        document.querySelector(".alert-success").style.display = "none";
    clearInterval(intervall);
    }
}

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick}>
            <button onClick={background_black}><i class="bi bi-brightness-high"></i> </button>
            <button onClick={background_gradient}><i class="bi bi-brightness-high-fill"></i> </button>
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}