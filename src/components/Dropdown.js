import React from "react"
import useIsComponentVisible from "../hooks/useIsComponentVisible"

import Button from "./Button"

const Dropdown = ({ label, component }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useIsComponentVisible(false)

  const handleOnClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <div ref={ref}>
      <Button label={label} onClick={handleOnClick} />
      {isComponentVisible &&
        component({ closeDropdown: () => setIsComponentVisible(false) })}
    </div>
  )
}

export default Dropdown
