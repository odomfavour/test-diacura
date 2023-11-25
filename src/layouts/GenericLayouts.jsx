import React from "react";

const GenericLayouts = ({children}) => {
  return (
    <>
      {/* Header */}
      <main>
        {children}
      </main>

      {/* <footer></footer> */}
    </>
  )
}

export default GenericLayouts