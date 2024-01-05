import "./Gallery.css"

export const Gallery = props => {
  const {details, clickTabItem, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const activeThumb = isActive ? 'card3' : 'card4'

  const onDelete = () => {
    clickTabItem(id)
  }

  return (
    <li>
      <button type="button" onClick={onDelete}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumb}
        />
      </button>
    </li>
  )
}
