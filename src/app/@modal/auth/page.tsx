import Link from 'next/link'

export default function Auth() {
  return (
    <div>
      <h1>Auth</h1>
      <Link href="/auth/login">Login</Link>
      <Link href="/auth/register">Register</Link>
    </div>
  )
}
