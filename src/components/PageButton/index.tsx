import "./style.css"

interface PageButtonProps {
  page: number,
  handleClick: (arg0: string) => void
}

const PageButton = ({page, handleClick}: PageButtonProps) => {
  return (
    <>
      {
        page === 0
          ? <button onClick={() => handleClick("next")}>Next</button>
          : (
          <div className="button-div">
            <button onClick={() => handleClick("previous")}>Previous</button>
            <button onClick={() => handleClick("next")}>Next</button>
          </div>
        )
      }
    </>
  )
}

export default PageButton
