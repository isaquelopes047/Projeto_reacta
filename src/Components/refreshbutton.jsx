import React from 'react';

export default function RefreshButton(){
    function reload(){
        document.location.reload();
    }

    return(
        <div className="container_button_refresh">
            <button onClick={reload}><i class="bi bi-arrow-clockwise"></i> </button>
        </div>
    )
}