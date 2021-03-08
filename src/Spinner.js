import React from 'react'

const Spinner = () => {
    return (<div className="spiner">
        
            {/* <div class="text-center"> */}
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Please Wait....</p>
            {/* </div> */}
        </div>
    )
}

export default Spinner
