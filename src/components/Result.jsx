import React from 'react'

const Result = (props) => {
  return (
    <div className="container">


    <button type="button" class="btn btn-info">
  Result <span class="badge badge-light">{props.counter}</span>
</button>  
    </div>  
  )
}

export default Result