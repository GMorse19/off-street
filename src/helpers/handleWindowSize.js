const handleWindowSize = () => {
  const windowSize = window.innerWidth
  const windowBool = windowSize >= 800 ? true : false
  return { windowSize: windowBool }
}

export default handleWindowSize
