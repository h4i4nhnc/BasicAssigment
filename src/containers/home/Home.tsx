import { cx } from '@emotion/css'
import { useCallback, useEffect, useState } from 'react'
import { User, UserCard } from 'components/card/UserCard'
import { chunkArray } from 'utils/common'
import { fetchUsers } from 'services/home'
import { styles } from './styles'

export const Home = () => {
  const [users, setUsers] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const fetchUserList = useCallback(async () => {
    setLoading(true)
    const users = await fetchUsers()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUserList()
  }, [fetchUserList])

  return loading ? (
    <div className={styles.loading}>Loading...</div>
  ) : (
    <div>
      {chunkArray(4, users).map((rows: User[], index: number) => (
        <div
          key={index}
          className={cx('columns is-desktop is-gapless', styles.cardRow)}
        >
          {rows.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ))}
    </div>
  )
}
