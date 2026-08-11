import NameLogo from '../assets/NameLogo.svg';

export interface HeaderProps {
  fullName: string;
}

export default function Header({ fullName }: HeaderProps) {
  return (
    <div className="sticky top-0 z-20 flex h-24 w-full items-center bg-brand-bg px-8">
      <a href="https://travingn.dev/">
        <img src={NameLogo} alt={fullName} className="h-8 w-auto" />
      </a>
    </div>
  );
}
