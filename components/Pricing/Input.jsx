import React from 'react'

const Input = (props) => {
    let { title, hint } = props;

  return (
    <div>
        <div className="title">
                {title}
              </div>
              <div className="form-group">
                <input
                  type="text"
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

export default Input