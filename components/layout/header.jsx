import Menu from '~/data/menu';
import Container from './container';
import TopMenu from './header/top-menu';
import MainMenu from './header/main-menu';

export default function Header() {
  return (
    <>
      <Container>
        <TopMenu
          flagshipMenus={Menu.flagshipMenus}
          amsWebsites={Menu.amsWebsites}
        />
      </Container>

      <div className="bg-slate-100 dark:bg-zinc-800 sticky top-0 z-10">
        <Container>
          <MainMenu mainMenus={Menu.mainMenus} />
        </Container>
      </div>
    </>
  );
}
