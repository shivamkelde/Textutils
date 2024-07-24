
import Alert from 'react-bootstrap/Alert';
import React from 'react';


function AlertDismissibleExample(props) {
    

    return (
      
       props.Alert && <Alert variant="warning" className='justify-content-center position-absolute w-100'>
           <div> <strong>{props.Alert.messege}</strong> {props.Alert.type}</div>
        </Alert>
    
    );


}

export default AlertDismissibleExample;