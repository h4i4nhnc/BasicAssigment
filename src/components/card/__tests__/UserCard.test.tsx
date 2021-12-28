import React from 'react'
import { render, screen } from '@testing-library/react'
import { UserCard } from '../UserCard'

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

test('should render 1 image in Card', () => {
  render(<UserCard user={userTest} />)
  expect(screen.getAllByRole('img').length).toBe(1)
})

test('render user name in Card', () => {
  render(<UserCard user={userTest} />)
  expect(screen.getByTestId('data-test-user-name')).toBeInTheDocument()
})

// have 3 icon with text item
test('have there IconText items', () => {
  render(<UserCard user={userTest} />)

  expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(3)
})

test('Render full informations of user', () => {
  render(<UserCard user={userTest} />)
  expect(screen.getByText(userTest.name)).toBeInTheDocument()
  expect(screen.getByText(userTest.phone)).toBeInTheDocument()
  expect(screen.getByText(userTest.email)).toBeInTheDocument()
  expect(screen.getByText(userTest.website)).toBeInTheDocument()
})

// heart, edit, delete
test('have there footer item in CardUser', () => {
  render(<UserCard user={userTest} />)

  expect(screen.getAllByRole('button').length).toBe(3)
})
