import cn from 'classnames';
import Link from 'next/link';
import styles from './styles.module.scss';

interface SocialProps {
  href: string;
  site: 'github' | 'instagram' | 'linkedin';
}

const Social = ({ href, site }: SocialProps) => {
  return (
    <Link href={href}>
      <a target='_blank' rel='noopener noreferrer' className={styles.link}>
        <i
          className={cn(
            'fa',
            `fa-${site}`,
            styles[`fa-${site}`],
            styles.social
          )}
        />
      </a>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        Made with{' '}
        <i className={cn('fa', 'fa-heart', styles.heart)} aria-hidden='true' />{' '}
        by{' '}
        <Link href='https://github.com/ncaron'>
          <a
            className={cn(styles.link, styles.name)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Niko Caron
          </a>
        </Link>
      </p>

      <div>
        <Social
          href='https://www.instagram.com/world_through_postcards/'
          site='instagram'
        />
        <Social
          href='https://github.com/ncaron/world-through-postcards'
          site='github'
        />
        <Social href='https://www.linkedin.com/in/nikocaron/' site='linkedin' />
      </div>
    </footer>
  );
};

export default Footer;
