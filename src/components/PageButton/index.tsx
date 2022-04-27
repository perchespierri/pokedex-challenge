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
          <>
            <button onClick={() => handleClick("previous")}>Previous</button>
            <button onClick={() => handleClick("next")}>Next</button>
          </>
        )
      }
    </>
  )
}

export default PageButton
