import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      {props.company.map((c) => <Link key={c.id} to={`/company/${c.id}`}>{c.fields.name}</Link>)}
    </nav>
  )
}

export default Nav