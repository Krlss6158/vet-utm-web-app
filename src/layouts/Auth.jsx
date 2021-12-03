import { theme } from 'core/theme';
export default function Auth({ children }) {
  return (
    <main>
      <section className={`${theme.backgroundPage} relative flex justify-center items-center min-h-screen`}>
        
        {children}
      </section>
    </main>
  );
}
