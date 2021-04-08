import React, { useContext } from 'react'
import { UserForm } from '../Components/UserForm'
import { Context } from '../Context'
import { RegisterMutation } from '../Container/RegisterMutation'
import { LoginMutation } from '../Container/LoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(({ data }) => {
                      const { signup } = data
                      activateAuth(signup)
                    })
                  }

                  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

                  return <UserForm title='Registrarse' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
                }
              }
      </RegisterMutation>
      <LoginMutation>
        {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables }).then(({ data }) => {
                      const { login } = data
                      activateAuth(login)
                    })
                  }

                  const errorMsg = error && 'Contraseña inválida o el usuario no existe.'

                  return <UserForm title='Iniciar Sesión' disabled={loading} error={errorMsg} onSubmit={onSubmit} />
                }
              }
      </LoginMutation>
    </>
  )
}
