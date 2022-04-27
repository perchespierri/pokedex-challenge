import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
      <h1>Page does not exist</h1>
      <Link to="/pokemon">
        <p>Go back</p>
      </Link>  
    </>
  )
}

export default PageNotFound
