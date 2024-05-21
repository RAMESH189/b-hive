
import './Header.scss'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="header">
      <div className="container header-wrapper">
        <div className="logo">
          <img src="/bhive-logo.png" alt="" />
        </div>
        <button className="phone">
          <img src="/phone-bhive.png" alt="" />
        </button>
      </div>
    </header>
  );
}