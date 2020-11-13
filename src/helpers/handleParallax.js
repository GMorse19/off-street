export const handleParallax = e => {
  const windowSize = window.innerWidth
  const parallaxBool = windowSize >= 800 ? true : false
  this.setState({ parallax: parallaxBool })
}
