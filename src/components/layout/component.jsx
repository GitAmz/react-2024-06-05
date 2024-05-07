import { Button } from "../button/component";
import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({children}) => {
return <div>
    <Header>
        <Button onclick={() => console.log('SignIn')}>SignIn</Button>
        <Button onclick={() => console.log('SignOut')}>SignOut</Button>
        </Header>
    {children}
    <Footer>Footer</Footer>
</div>;
};