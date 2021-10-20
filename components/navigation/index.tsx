import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const StyledLink = ({ href, text }: { href: string; text: string }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={cn(styles.link, {
          [styles.active]: isActive,
        })}
      >
        {text}
      </a>
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.links}>
        <StyledLink href={'/'} text={'Home'} />
        <StyledLink href={'/trade'} text={'Trade'} />
        <StyledLink href={'/radio'} text={'Radio'} />
        <StyledLink href={'/about'} text={'About'} />
      </nav>
    </div>
  );
};

export default Navigation;
