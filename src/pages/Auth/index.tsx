import './style.css'

export function Auth() {
  return (
    <div className="container">
      <form action="">
        <strong>Login</strong>
        <input className="mail" type="text" placeholder="E-mail" />
        <input className="pass" type="text" placeholder="Senha" />
        <a href="/">
          <button type="submit">Enviar</button>
        </a>
      </form>
    </div>
  )
}
