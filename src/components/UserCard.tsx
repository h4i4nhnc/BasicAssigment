import { cx, css } from '@emotion/css'
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

const renderIconText = (icon: string, text: string) => {
  return (
    <div className="icon-text is-inline-block">
      <span className="ellipsis is-ellipsis-1">{text}</span>
    </div>
  )
}

export const UserCard = ({ user }: UserCardProps) => {
  const userImageUrl = `https://avatars.dicebear.com/v2/avataaars/{{${user.name}}}.svg?options[mood][]=happy`
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
          <div>{renderIconText('fa-envelope', user.email)}</div>
          <div>{renderIconText('fa-phone', user.phone)}</div>
          <div>{renderIconText('fa-globe', user.website)}</div>
        </div>
        <footer className="card-footer">
          <button className="button is-light card-footer-item">
            <span className="icon is-small">
              <i className="fas fa-check"></i>
            </span>
            <span>Love</span>
          </button>
          <button className="button is-light card-footer-item">
            <span className="icon is-small">
              <i className="fas fa-check"></i>
            </span>
            <span>Edit</span>
          </button>
          <button className="button is-light card-footer-item">
            <span className="icon is-small">
              <i className="fas fa-check"></i>
            </span>
            <span>Delete</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
