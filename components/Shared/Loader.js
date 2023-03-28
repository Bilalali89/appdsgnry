import React, { Component } from 'react';



const Loader = (props) => {
    let {loading} = props
  return (
    <>
    <div className={`preloader ${loading ? '' : 'preloader-deactivate'}`}>
        <div className="spinner"><img src="/images/logo.png" alt="image" /></div>
    </div>
</>
  )
}

export default Loader

// class Loader extends Component {
//     render() {
//         return (
//             <>
//                 <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
//                     <div className="spinner"><img src="/images/logo.png" alt="image" /></div>
//                 </div>
//             </>
//         );
//     }
// }

// export default Loader;