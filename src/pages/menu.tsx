import Section from '~/layouts/Section';
import MenuCard from '~/components/Menu/MenuCard';
import { MenuItems } from '~/data/MenuContent';

export default function Menu() {
    return (
        <Section>
            <div className='container'>
                <MenuCard items={MenuItems} />
            </div>
        </Section>
    );
}
