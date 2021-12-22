import { css, cx } from '@emotion/css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { User, UserCard } from '../components/UserCard'
import { chunkArray } from '../utils/common'

export const Home = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (users.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        const users = res.data
        setUsers(users)
      })
    }
  })
  return (
    <div>
      {chunkArray(4, users).map((rows: User[], index: number) => (
        <div
          key={index}
          className={cx(
            'columns is-desktop is-gapless',
            css({ marginBottom: '0px !important' }),
          )}
        >
          {rows.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ))}
    </div>
  )
}
