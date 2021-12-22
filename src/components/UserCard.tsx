import {
  faEnvelope,
  faPhone,
  faGlobe,
  faHeart,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cx, css } from '@emotion/css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { addhttp } from '../utils/common'

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: object
  phone: string
  website: string
  company: object
}

type UserCardProps = {
  user: User
}

const renderIconText = (
  icon: IconProp,
  text: string,
  isLink: boolean = false,
) => {
  return (
    <div className="icon-text">
      <div>
        <FontAwesomeIcon icon={icon} className={css({ marginRight: 8 })} />
      </div>
      <div>
        <span className="ellipsis is-ellipsis-1">
          {isLink ? (
            <a href={addhttp(text)} target="_blank" rel="noreferrer">
              {text}
            </a>
          ) : (
            text
          )}
        </span>
      </div>
    </div>
  )
}

const renderFooterButton = (icon: IconProp, callBack: () => void) => (
  <button className="button is-light card-footer-item" onClick={callBack}>
    <FontAwesomeIcon icon={icon} className={css({ marginRight: 12 })} />
  </button>
)

export const UserCard = ({ user }: UserCardProps) => {
  const userImageUrl = `https://avatars.dicebear.com/v2/avataaars/{{${user.name}}}.svg?options[mood][]=happy`

  const likeAction = () => {
    // do like with user
  }
  const editAction = () => {
    // do edit with user
  }
  const deleteAction = () => {
    // do remove  user
  }
  return (
    <div className={cx('column is-one-quarter')} key={user.id}>
      <div className={css({ margin: 12, border: 'thin solid lightgrey' })}>
        <div className="card-image">
          <figure
            className={cx('image is-2by1', css({ backgroundColor: '#ededed' }))}
          >
            <img src={userImageUrl} alt="user-avatar" />
          </figure>
        </div>
        <div className={cx('card-content has-text-left', css({ padding: 12 }))}>
          <div className="has-text-weight-bold">{user.name}</div>
          <div />
          <div>{renderIconText(faEnvelope, user.email)}</div>
          <div>{renderIconText(faPhone, user.phone)}</div>
          <div>{renderIconText(faGlobe, user.website, true)}</div>
        </div>
        <footer className="card-footer">
          {renderFooterButton(faHeart, likeAction)}
          {renderFooterButton(faPen, editAction)}
          {renderFooterButton(faTrash, deleteAction)}
        </footer>
      </div>
    </div>
  )
}
