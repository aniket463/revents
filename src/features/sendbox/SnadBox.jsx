import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { increment, decrement } from './testReducer'
import { openModal } from '../../app/common/modals/modalReducer'

const SnadBox = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.test.data)
  return (
    <>
      <h1>Testing 123</h1>
      <h1>The data is:{data}</h1>
      <Button onClick={() => dispatch(increment(20))} content='Increment' color='green' />
      <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red' />
      <Button onClick={() => dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))} content='open Modal' color='teal' />

    </>
  )
}

export default SnadBox