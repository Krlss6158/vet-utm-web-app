import { data } from './data';
import Section from './Section';
import Normal from './Normal';
import Menu from './Menu';

const Navegation = () => {
    return (
        <nav className="flex-1 overflow-x-auto overflow-y-hidden w-full">
            <ul className="py-2">

                {
                    data.map((e, key) => {
                        return (
                            <div key={key}>
                                {e.type === 'section' ? <Section value={e.name} /> :
                                    e.type === 'normal' ? <Normal href={e.path} value={e.name}>{e.icon}</Normal> :
                                        e.type === 'menu' && <Menu value={e.name} arr={e.subMenu}>{e.icon}</Menu>}
                            </div>
                        );
                    })
                }

            </ul >
        </nav >
    );
}

export default Navegation;