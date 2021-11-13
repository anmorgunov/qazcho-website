
export default function Click({ href, title }) {
    return (
        <a className="underline hover:no-underline text-accent-500 hover:text-accent-400" href={href}>{title}</a>
    )
  }