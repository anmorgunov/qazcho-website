
export default function Click({ href, title }) {
    return (
        <a className="underline hover:no-underline text-accent-600 hover:text-accent-500" href={href}>{title}</a>
    )
  }