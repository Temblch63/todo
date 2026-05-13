import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'

import TodoForm from './TodoForm'

describe('TodoForm', () => {
   it('does not add an empty task', async () => {
      render(<TodoForm />)

      const button = screen.getByRole('button', { name: 'Add' })
      await userEvent.click(button)
      const items = screen.queryAllByRole('listitem')

      expect(items.length).toBe(0)
   });
   
});


