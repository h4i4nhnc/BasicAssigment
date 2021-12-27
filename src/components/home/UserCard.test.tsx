import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserCard } from './UserCard'

const userTest = {
  id: 1,
  username: 'user name test',
  address: {},
  website: 'google.com',
  company: {
    name: 'jitera',
  },
  email: 'testing1@gmail.com',
  name: 'test user',
  phone: '99999',
}

test('renders the CardUser component', () => {
  render(<UserCard user={userTest} />)
  const cardUserElement = screen.getByTestId('data-test-user-card')
  expect(cardUserElement).toBeInTheDocument()
})

test('have there footer item in CardUser', () => {
  render(<UserCard user={userTest} />)

  expect(screen.getAllByRole('button').length).toBe(3)
})
