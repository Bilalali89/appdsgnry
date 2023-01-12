import React from 'react'

const TextArea = (props) => {
    let {title, hint} = props
  return (
    <div>
         <div className="titletextarea">{title}</div>
         <div className="form-group">
                <textarea
                  name="textarea"
                  cols="30"
                  rows="6"
                  placeholder=""
                  className="form-control"
                  required
                />
              </div>
      <div className="hint">{hint}</div>
    </div>
  )
}

export default TextArea