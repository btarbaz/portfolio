import Link from 'next/link';

// Footer.js
export default function Footer() {
  return (
    <footer
      style={{ padding: '1rem 0', textAlign: 'center', fontSize: '0.8rem' }}
    >
      <p>
        © Copyright {new Date().getFullYear()} . Made by{' '}
        <Link
          className="underline font-bold hover:cursor-pointer"
          href={'https://github.com/btarbaz'}
          target="_blank"
          rel="noopener norelerrer"
        >
          Arbaz Khan
        </Link>
      </p>
    </footer>
  );
}
