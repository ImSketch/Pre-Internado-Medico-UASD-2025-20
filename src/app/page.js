import moment from "moment";
import Countdown from "./Countdown";
import Button from "./Button";

export default function Home() {
  const ceremonyTimestamp = moment("01/08/2025", "DD/MM/YYYY");

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <main className="flex flex-col gap-8 items-center sm:items-start container mx-auto my-10">

        <header className="mx-auto animate-fade-down animate-ease-out">
          <h1 className={`font-script text-4xl sm:text-6xl font-bold text-yellow-800`}>
            Pre Internado Médico UASD
          </h1>
          <h2 className='text-xl sm:text-2xl tracking-widest text-yellow-600 leading-6'>Promoción 2025-20</h2>
        </header>

        {/* Contador */}
        <Countdown
          className='mx-auto animate-fade animate-ease-out animate-delay-500'
          expiresTimestamp={ceremonyTimestamp.unix()}
        />

        <nav className="flex flex-col sm:flex-row flex-wrap items-stretch justify-stretch gap-5 mx-auto my-5 animate-fade-up animate-ease-out animate-delay-1000">
          <Button rel='nofollow noopener noreferer' href='https://forms.gle/i5ydWowgRP3W6BN56' target='_blank'>Inscribirse</Button>
          <Button rel='nofollow noopener noreferer' href='https://forms.gle/EFKcy8RXcYim9akbA' target='_blank'>Propuestas</Button>
          <Button rel='nofollow noopener noreferer' href='https://chat.whatsapp.com/BRni825291k8LyLtSSmkT8' target='_blank' className='flex flex-row items-center gap-x-2'>
            <svg viewBox="0 0 32 32" className="size-5">
              <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fillRule="evenodd" fill="currentColor"></path>
            </svg>
            <span>Comunidad de WhatsApp</span>
          </Button>
        </nav>

        <footer className='mx-auto'>
          <p className='text-center text-xs text-yellow-800'>Hecho con ❤️ por <a href='https://instagram.com/wuggycakes' className='border-b-1 border-b-yellow-500 hover:border-b-3 text-yellow-950 font-bold transition-all' target='_blank' rel='nofollow noopener noreferer'>Omar Ureña</a>, futuro médico Pre-Intero.</p>
        </footer>

      </main>
    </div>
  );
}
