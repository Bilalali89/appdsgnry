import React from 'react'

const InputBilling = (props) => {
    let { title, hint, type } = props;
    

  return (
    <div>
        <div className="title">
                {title}
              </div>
              <div className="form-group">
                <input
                  type={type}
                  name="name"
                  placeholder=''
                  className="form-control"
                  required
                />
              </div>
              <div className="hint">
                {hint}
              </div>
    </div>
  )
}

export default InputBilling