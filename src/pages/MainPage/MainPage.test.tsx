// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { MainPage } from './MainPage'
import { useLazyGetPostListQuery } from '../../store/api/postApi'

// jest.mock('./useLazyGetPostListQuery')

const testDate = new Date().toISOString()

// const useLazyGetPostListQuery = jest.mock()

const mockPostItem = {
  main_text: 'Тестовый текст',
  reg_date: testDate,
  photos: [],
  user_fk: {
    name: 'Тестовый пользователь'
  },
  id: 1  
}

describe('Тестируем страницу MainPage', () => {
  // beforeEach(() => {
  //   useLazyGetPostListQuery.mockClear()
  // })

  test('Верно отображается список постов', () => {
    // useLazyGetPostListQuery.mockReturnValueOnce = {
    //   fetchTrigger: () => {}, 
    //   data: [mockPostItem], 
    //   isError: false, 
    //   isLoading: false, 
    //   isSuccess: true 
    // }

    // render(<MainPage />)

    // const postItemElement = screen.getByText('Тестовый текст')

    // expect(postItemElement).toBeInTheDocument()
  })
})